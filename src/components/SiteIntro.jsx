import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const INTRO_DURATION = 3000;
const CURTAIN_DURATION = 1.2;

export default function SiteIntro() {
  const [isOpening, setIsOpening] = useState(false);
  const [isVisible, setIsVisible] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [soundStatus, setSoundStatus] = useState('starting');
  const audioContextRef = useRef(null);
  const masterGainRef = useRef(null);
  const beepsScheduledRef = useRef(false);
  const soundStatusRef = useRef('starting');
  const startedAtRef = useRef(0);
  const openTimerRef = useRef(null);
  const removeTimerRef = useRef(null);
  const scheduleBeepsRef = useRef(() => {});

  const updateSoundStatus = (status) => {
    soundStatusRef.current = status;
    setSoundStatus(status);
  };

  const finishIntro = useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    window.clearTimeout(removeTimerRef.current);
    setIsOpening(true);
    removeTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, CURTAIN_DURATION * 1000);
  }, []);

  const toggleSound = () => {
    const context = audioContextRef.current;
    const masterGain = masterGainRef.current;
    if (!context || !masterGain) return;

    if (soundStatusRef.current === 'on') {
      masterGain.gain.setTargetAtTime(0, context.currentTime, 0.02);
      updateSoundStatus('muted');
      return;
    }

    if (soundStatusRef.current === 'muted') {
      masterGain.gain.setTargetAtTime(0.12, context.currentTime, 0.02);
      updateSoundStatus('on');
      return;
    }

    context.resume().then(() => {
      if (context.state !== 'running') {
        updateSoundStatus('unavailable');
        return;
      }
      masterGain.gain.setTargetAtTime(0.12, context.currentTime, 0.02);
      updateSoundStatus('on');
      scheduleBeepsRef.current();
    }).catch(() => {
      updateSoundStatus('unavailable');
    });
  };

  useEffect(() => {
    if (!isVisible) return undefined;

    let isActive = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    startedAtRef.current = performance.now();

    scheduleBeepsRef.current = () => {
      const context = audioContextRef.current;
      const masterGain = masterGainRef.current;
      if (
        !context
        || !masterGain
        || context.state !== 'running'
        || beepsScheduledRef.current
      ) return;

      beepsScheduledRef.current = true;
      const elapsed = performance.now() - startedAtRef.current;
      for (let offset = 0; offset < INTRO_DURATION; offset += 360) {
        if (offset < elapsed) continue;

        const startTime = context.currentTime + (offset - elapsed) / 1000;
        const oscillator = context.createOscillator();
        const toneGain = context.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(660, startTime);
        toneGain.gain.setValueAtTime(0.0001, startTime);
        toneGain.gain.exponentialRampToValueAtTime(1, startTime + 0.012);
        toneGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.11);
        oscillator.connect(toneGain);
        toneGain.connect(masterGain);
        oscillator.start(startTime);
        oscillator.stop(startTime + 0.12);
      }
    };

    Promise.resolve().then(() => {
      if (!isActive) return;
      const context = new window.AudioContext();
      const masterGain = context.createGain();
      masterGain.gain.setValueAtTime(0.12, context.currentTime);
      masterGain.connect(context.destination);
      audioContextRef.current = context;
      masterGainRef.current = masterGain;
      return context.resume().then(() => {
        if (isActive && context.state === 'running') {
          updateSoundStatus('on');
          scheduleBeepsRef.current();
        } else if (isActive) {
          updateSoundStatus('blocked');
        }
      }).catch(() => {
        if (isActive) updateSoundStatus('blocked');
      });
    }).catch(() => {
      if (isActive) updateSoundStatus('unavailable');
    });

    openTimerRef.current = window.setTimeout(finishIntro, INTRO_DURATION);

    return () => {
      isActive = false;
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(openTimerRef.current);
      window.clearTimeout(removeTimerRef.current);
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
    };
  }, [finishIntro, isVisible]);

  if (!isVisible) return null;

  const soundLabel = {
    starting: 'Enable sound',
    on: 'Mute beeps',
    muted: 'Enable beeps',
    blocked: 'Enable sound',
    unavailable: 'Sound unavailable',
  }[soundStatus];

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]">
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/2 border-r border-white/10 bg-[#101114]"
        initial={{ x: '0%' }}
        animate={{ x: isOpening ? '-101%' : '0%' }}
        transition={{ duration: CURTAIN_DURATION, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/2 border-l border-white/10 bg-[#101114]"
        initial={{ x: '0%' }}
        animate={{ x: isOpening ? '101%' : '0%' }}
        transition={{ duration: CURTAIN_DURATION, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
        animate={{ opacity: isOpening ? 0 : 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <p className="font-technical intro-title font-bold uppercase text-white">
          BELLO SAMAD
        </p>
        <div aria-hidden="true" className="mt-6 flex h-5 items-center gap-1">
          {[0, 1, 2, 3, 4].map((bar) => (
            <span
              key={bar}
              className="intro-beep-bar block w-1 rounded-full bg-cyan-300"
              style={{ animationDelay: `${bar * 90}ms` }}
            />
          ))}
        </div>
        <p className="sr-only" role="status">Loading Bello Samad’s portfolio</p>
      </motion.div>

      <div className="pointer-events-auto absolute inset-x-0 bottom-8 flex items-center justify-center gap-5 px-4">
        <button
          type="button"
          onClick={toggleSound}
          disabled={soundStatus === 'unavailable'}
          aria-pressed={soundStatus === 'on'}
          className="cursor-pointer rounded-full border border-white/20 px-4 py-2 text-sm text-gray-200 transition hover:border-white/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {soundLabel}
        </button>
        <button
          type="button"
          onClick={finishIntro}
          className="cursor-pointer rounded-full border border-white/20 px-4 py-2 text-sm text-gray-200 transition hover:border-white/50 hover:text-white"
        >
          Skip intro
        </button>
      </div>
    </div>
  );
}
