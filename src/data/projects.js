import aether from '../images/aether.png';
import Csdb from '../images/Csdb.png';
import ffdb from '../images/ffdb.png';
import pq from '../images/pq.png';
import cvboost from '../images/cvboost.png';
import faultlineqa from '../images/fautlinehome.png';

export const projects = [
  {
    slug: "flashfinance-ai",
    title: "FlashFinance AI",
    description:
      "FlashFinance AI is an AI-powered financial analysis platform for researching stocks and making sense of market activity. It brings together stock research, trading strategies, synthesized market news, and sentiment analysis, with AI-generated insights to help users explore financial information from one workspace.",
    image: ffdb,
    liveUrl: "https://flashfinance.vercel.app/",
    githubUrl: "https://github.com/ayomidebello604-a11y/flashfinance",
    badge: "AI",
    location: "Fintech",
    tags: ["React", "Tailwind", "Supabase", "Finance API", "AI"],
  },
  {
    slug: "aether-ai",
    title: "Aether AI",
    description:
      "Aether AI is a multi-mode AI workspace that combines source-backed research, code analysis, and image generation. Users can ask research questions and review cited sources, paste code for explanations and improvement suggestions, or generate images. Accounts keep the workspace protected, and users can save useful answers and annotated code for later.",
    image: aether,
    liveUrl: "https://aetherai-theta.vercel.app/",
    githubUrl: "https://github.com/ayomidebello604-a11y/aetherai",
    badge: "AI",
    location: "Product",
    tags: ["Next.js", "Tailwind", "Supabase", "API", "AI"],
  },
  {
    slug: "philo-quote",
    title: "Philo-quote",
    description:
      "Philo-quote (Quote Explorer) is a responsive app for discovering and reflecting on philosophical quotes. Visitors can explore more than 150 quotes, search by author or text, and filter by philosophical school. It also features a daily quote, saved favorites, and a reflection journal, with data kept between visits in the browser.",
    image: pq,
    liveUrl: "https://philo-quote.vercel.app/",
    githubUrl: "https://github.com/ayomidebello604-a11y/PhiloQuote",
    location: "Editorial",
    tags: ["React", "Motion", "Design"],
  },
  {
    slug: "Emergensi",
    title: "Emergensì",
    description:
      "Emergensì is a patient and caregiver health-monitoring application. It brings vital tracking, care schedules, and emergency support together to help patients and caregivers keep important care information and actions organized.",
    image: Csdb,
    liveUrl: "https://caresync-wine.vercel.app/",
    githubUrl: "https://github.com/ayomidebello604-a11y/caresync",
    location: "HealthTech",
    tags: ["React", "API", "Firebase", "Recharts"],
  },
  {
    slug: "cv-boost-ai",
    title: "CV-Boost",
    description:
      "CV-Boost AI helps job seekers tailor an existing résumé to a specific job description. Users can upload a PDF or Word CV, review an estimated ATS score and missing keywords, and get AI-assisted rewrites for résumé bullet points alongside a personalized cover letter. The service presents a free preview without requiring an account and supports exporting application documents.",
    image: cvboost,
    liveUrl: "https://cv-boost-ai-sandy.vercel.app/",
    githubUrl:
      "https://github.com/abdulmalik-codeWithFaith/cvboost-ai-frontend",
    location: "Product",
    tags: ["Next.js", "Tailwind", "Supabase", "AI", "Markdown"],
  },
  {
    slug: "FaultLineqa",
    title: "FaultLineQA",
    description:
      "A loadtester and vulnerability scanner for web applications. It can perform load testing, security scanning, and performance analysis to help developers identify potential issues and improve the reliability and security of their web applications.",
    image: faultlineqa,
    liveUrl: "https://faultlineqa.com",
    githubUrl: "https://github.com/peterawotundun/Faultline",
    location: "Tool",
    tags: ["React", "Tailwind","TypeScript", "Node.js", "AI"],
  },
];
