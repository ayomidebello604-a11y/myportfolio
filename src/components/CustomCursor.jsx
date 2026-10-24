import { useEffect, useRef } from 'react';

const interactiveSelector = 'a, button, input, textarea, select, [role="button"], [data-cursor-hover]';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!cursor || !finePointer.matches || reducedMotion.matches) return undefined;

    const moveCursor = (event) => {
      cursor.style.setProperty('--cursor-x', `${event.clientX}px`);
      cursor.style.setProperty('--cursor-y', `${event.clientY}px`);
      cursor.classList.add('is-visible');
    };

    const updateHoverState = (event) => {
      const target = event.type === 'pointerout' ? event.relatedTarget : event.target;
      cursor.classList.toggle(
        'is-hovering',
        target instanceof Element && Boolean(target.closest(interactiveSelector)),
      );
    };

    const hideCursor = () => {
      cursor.classList.remove('is-visible', 'is-hovering');
    };

    document.addEventListener('pointermove', moveCursor);
    document.addEventListener('pointerover', updateHoverState);
    document.addEventListener('pointerout', updateHoverState);
    document.addEventListener('pointerleave', hideCursor);

    return () => {
      document.removeEventListener('pointermove', moveCursor);
      document.removeEventListener('pointerover', updateHoverState);
      document.removeEventListener('pointerout', updateHoverState);
      document.removeEventListener('pointerleave', hideCursor);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor__ring" />
      <span className="custom-cursor__dot" />
    </div>
  );
}
