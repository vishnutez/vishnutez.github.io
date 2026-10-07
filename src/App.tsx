import { useState, useEffect } from "react";
import { ProfileSidebar } from "./components/ProfileSidebar";
import { AboutSection } from "./components/AboutSection";
import { PublicationsSection } from "./components/PublicationsSection";
import { TechnicalArticlesSection } from "./components/TechnicalArticlesSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SelectedPapersSection } from "./components/SelectedPapersSection";
import { Sun, Moon } from "lucide-react";
import { CurrentProjectSection } from "./components/CurrentProjectSection";
import { ResearchInterestsSection } from "./components/ResearchInterestsSection";
import bioContent from "./content/bio.md?raw";

// Configuration flag to show/hide articles section
const SHOW_ARTICLES_SECTION = false;

export default function App() {
  const [activeTab, setActiveTab] = useState<
    "about" | "publications" | "articles" | "background"
  >("about");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight;
      const clientHeight = target.clientHeight;
      const trackLength = scrollHeight - clientHeight;
      const progress =
        trackLength > 0 ? (scrollTop / trackLength) * 100 : 0;
      setScrollProgress(progress);
    };

    const contentArea = document.getElementById("content-area");
    if (contentArea) {
      contentArea.addEventListener("scroll", handleScroll);
      // Initial calculation
      const scrollTop = contentArea.scrollTop;
      const scrollHeight = contentArea.scrollHeight;
      const clientHeight = contentArea.clientHeight;
      const trackLength = scrollHeight - clientHeight;
      const progress =
        trackLength > 0 ? (scrollTop / trackLength) * 100 : 0;
      setScrollProgress(progress);
    }

    return () => {
      if (contentArea) {
        contentArea.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activeTab]); // Recalculate when tab changes

  // Redirect to "about" if articles tab is active but articles section is disabled
  useEffect(() => {
    if (activeTab === "articles" && !SHOW_ARTICLES_SECTION) {
      setActiveTab("about");
    }
  }, [activeTab]);

  // Mock data - replace with your actual information
  const profileData = {
    name: "Vishnu Teja Kunde",
    imageSrc:
      "/_images/display_picture.jpg",
    links: {
      github: "https://github.com/vishnutez",
      scholar:
        "https://scholar.google.com/citations?hl=en&user=eQwm1OUAAAAJ",
      email: "mailto:kvishnutez@gmail.com",
      linkedin: "https://www.linkedin.com/in/vishnu-teja-kunde-3a28951ab/",
      twitter: "https://x.com/sampleparticle",
    },
  };

  const aboutData = {
    bio: bioContent,
    experience: [
      {
        role: "Summer Intern",
        organization: "Qualcomm AI Research, San Diego",
        duration: "May - Aug 2026",
        description:
          "Developed an agentic harness for multi-hop deep retrieval.",
      },
    ],
    education: [
      {
        degree: "Doctorate in Computer Engineering",
        institution: "Texas A&M University",
        duration: "2022 - Present",
        relevantCourses: [
          "Deep Learning",
          "Reinforcement Learning",
          "Bayesian Inference and Sampling",
          "Analysis of Algorithms",
          "High Dimensional Probability",
          "Measure Theory",
        ],
      },
      {
        degree: "Master of Technology in Signal Processing",
        institution: "Indian Institute of Science",
        duration: "2020 - 2022",
        relevantCourses: [
          "Matrix Theory",
          "Random Processes",
          "Linear and Non-linear Optimization",
          "Game Theory",
          "Information Theory",
        ],
      },
      {
        degree:
          "Bachelor of Technology in Electrical and Electronics Engineering",
        institution:
          "National Insititute of Technology, Warangal",
        duration: "2016 - 2020",
      },
    ],
    updates: [
      {
        date: "Oct, 2026",
        content:
          "Our work on AgentDiscover, autonomous discovery with minimal search scaffolding, is on arXiv!",
      },
      {
        date: "Sep, 2026",
        content:
          "Two papers accepted to NeurIPS 2026: reinforcement learning for diffusion LLMs with entropy-guided step selection and stepwise advantages, and inference-time search using side information for diffusion-based image reconstruction!",
      },
      {
        date: "Aug, 2026",
        content:
          "Wrapped up my summer internship at Qualcomm AI Research, San Diego, where I developed an agentic harness for multi-hop deep retrieval.",
      },
      {
        date: "Jul, 2026",
        content:
          "Our work on real-time text transmission via LLM-based entropy coding over fixed-rate channels is accepted to Asilomar 2026!",
      },
      {
        date: "Oct, 2025",
        content:
          "Our work on developing an inference-time search algorithm for diffused-based image reconstruction using side information is on arXiv!",
      },
      {
        date: "May, 2025",
        content:
          "Our work on transformers as provably optimal in-context estimators for wireless communications is accepted to AISTATS 2025!",
      },
    ],
  };

  const selectedPapers = [
    {
      title:
        "AgentDiscover: Autonomous Discovery with Minimal Search Scaffolding",
      authors: "Mahdi Farahbakhsh, Ilan Sela, Fatemeh Doudi, Vishnu Teja Kunde, Krishna Narayanan, Jean-Francois Chamberland, and Dileep Kalathil",
      venue: "arXiv Preprint",
      year: 2026,
      description:
        "Introduced AgentDiscover, where a coding agent plans the search itself and records every attempt in a database of ideas and candidates that serves as long-term memory, outperforming prior LLM-based discovery frameworks at lower cost on kernel engineering, biology, algorithm design, and mathematics tasks.",
      pdfLink: "https://arxiv.org/pdf/2610.05334",
      codeLink: "https://github.com/mhdfb/AgentDiscover",
      bibtex: `@misc{farahbakhsh2026agentdiscover,
  title={AgentDiscover: Autonomous Discovery with Minimal Search Scaffolding},
  author={Mahdi Farahbakhsh and Ilan Sela and Fatemeh Doudi and Vishnu Teja Kunde and Krishna Narayanan and Jean-Francois Chamberland and Dileep Kalathil},
  year={2026},
  eprint={2610.05334},
  archivePrefix={arXiv},
  primaryClass={cs.AI},
  url={https://arxiv.org/abs/2610.05334}
}`,
    },
    {
      title:
        "Reinforcement Learning for Diffusion LLMs with Entropy-Guided Step Selection and Stepwise Advantages",
      authors: "Vishnu Teja Kunde, Fatemeh Doudi, Mahdi Farahbakhsh, Dileep Kalathil, Krishna Narayanan, and Jean-Francois Chamberland",
      venue: "NeurIPS (To appear)",
      year: 2026,
      description:
        "Proposed a reinforcement learning approach for diffusion large language models that uses entropy-guided step selection and stepwise advantages.",
      pdfLink: "https://arxiv.org/pdf/2603.12554",
      codeLink: "https://github.com/vishnutez/egspo-dllm-rl",
      bibtex: `@misc{kunde2026reinforcementlearningdiffusionllms,
  title={Reinforcement Learning for Diffusion LLMs with Entropy-Guided Step Selection and Stepwise Advantages},
  author={Vishnu Teja Kunde and Fatemeh Doudi and Mahdi Farahbakhsh and Dileep Kalathil and Krishna Narayanan and Jean-Francois Chamberland},
  year={2026},
  eprint={2603.12554},
  archivePrefix={arXiv},
  primaryClass={cs.LG},
  url={https://arxiv.org/abs/2603.12554}
}`,
    },
    {
      title:
        "Inference-Time Search using Side Information for Diffused-Based Image Reconstruction",
      authors: "Mahdi Farahbakhsh*, Vishnu Teja Kunde*, Dileep Kalathil, Krishna Narayanan, and Jean-Francois Chamberland",
      venue: "NeurIPS (To appear)",
      year: 2026,
      description:
        "Developed a novel inference-time search algorithm for diffusion models that leverages side information to guide the image sampling process, resulting in more accurate and reliable reconstructions for ill-posed inverse problems.",
      pdfLink: "https://arxiv.org/pdf/2510.03352",
      codeLink: "https://github.com/mhdfb/sideinfo-search-reconstruction",
      bibtex: `@article{farahbakhsh2025inference,
  title={Inference-Time Search using Side Information for Diffusion-based Image Reconstruction},
  author={Farahbakhsh, Mahdi and Kunde, Vishnu Teja and Kalathil, Dileep and Narayanan, Krishna and Chamberland, Jean-Francois},
  journal={arXiv preprint arXiv:2510.03352},
  year={2025}
}`,
    },
    {
      title:
        "Transformers are Provably Optimal In-context Estimators for Wireless Communications",
      authors: "Vishnu Teja Kunde, Vicram Rajagopalan, Chandra Shekhara Kaushik Valmeekam, Krishna Narayanan, Srinivas Shakkottai, Dileep Kalathil, and Jean-Francois Chamberland",
      venue: "AISTATS",
      year: 2025,
      description:
        "Proved optimality results for transformers as in-context estimators, providing theoretical guarantees and deeper understanding of attention-driven inference.",
      pdfLink: "https://raw.githubusercontent.com/mlresearch/v258/main/assets/kunde25a/kunde25a.pdf",
      codeLink: "https://github.com/vishnutez/in-context-estimation",
      bibtex: `@inproceedings{kunde2025transformersare,
  title={Transformers are Provably Optimal In-context Estimators for Wireless Communications},
  author={Kunde, Vishnu Teja and Rajagopalan, Vicram and Valmeekam, Chandra Shekhara Kaushik and Narayanan, Krishna and Chamberland, Jean-Francois and Kalathil, Dileep and Shakkottai, Srinivas},
  booktitle={Proceedings of The 28th International Conference on Artificial Intelligence and Statistics},
  year={2025}
}`,
    },
  ];

  const publications = [
    {
      title:
        "AgentDiscover: Autonomous Discovery with Minimal Search Scaffolding",
      authors: "Mahdi Farahbakhsh, Ilan Sela, Fatemeh Doudi, Vishnu Teja Kunde, Krishna Narayanan, Jean-Francois Chamberland, and Dileep Kalathil",
      venue: "arXiv Preprint",
      year: 2026,
      description:
        "Introduced AgentDiscover, where a coding agent plans the search itself and records every attempt in a database of ideas and candidates that serves as long-term memory, outperforming prior LLM-based discovery frameworks at lower cost on kernel engineering, biology, algorithm design, and mathematics tasks.",
      pdfLink: "https://arxiv.org/pdf/2610.05334",
      codeLink: "https://github.com/mhdfb/AgentDiscover",
      bibtex: `@misc{farahbakhsh2026agentdiscover,
  title={AgentDiscover: Autonomous Discovery with Minimal Search Scaffolding},
  author={Mahdi Farahbakhsh and Ilan Sela and Fatemeh Doudi and Vishnu Teja Kunde and Krishna Narayanan and Jean-Francois Chamberland and Dileep Kalathil},
  year={2026},
  eprint={2610.05334},
  archivePrefix={arXiv},
  primaryClass={cs.AI},
  url={https://arxiv.org/abs/2610.05334}
}`,
    },
    {
      title:
        "Reinforcement Learning for Diffusion LLMs with Entropy-Guided Step Selection and Stepwise Advantages",
      authors: "Vishnu Teja Kunde, Fatemeh Doudi, Mahdi Farahbakhsh, Dileep Kalathil, Krishna Narayanan, and Jean-Francois Chamberland",
      venue: "NeurIPS (To appear)",
      year: 2026,
      description:
        "Proposed a reinforcement learning approach for diffusion large language models that uses entropy-guided step selection and stepwise advantages.",
      pdfLink: "https://arxiv.org/pdf/2603.12554",
      codeLink: "https://github.com/vishnutez/egspo-dllm-rl",
      bibtex: `@misc{kunde2026reinforcementlearningdiffusionllms,
  title={Reinforcement Learning for Diffusion LLMs with Entropy-Guided Step Selection and Stepwise Advantages},
  author={Vishnu Teja Kunde and Fatemeh Doudi and Mahdi Farahbakhsh and Dileep Kalathil and Krishna Narayanan and Jean-Francois Chamberland},
  year={2026},
  eprint={2603.12554},
  archivePrefix={arXiv},
  primaryClass={cs.LG},
  url={https://arxiv.org/abs/2603.12554}
}`,
    },
    {
      title:
        "Inference-Time Search using Side Information for Diffusion-based Image Reconstruction",
      authors: "Mahdi Farahbakhsh*, Vishnu Teja Kunde*, Dileep Kalathil, Krishna Narayanan, and Jean-Francois Chamberland",
      venue: "NeurIPS (To appear)",
      year: 2026,
      description:
        "Developed a novel inference-time search algorithm for diffusion models that leverages side information to guide the image sampling process, resulting in more accurate and reliable reconstructions for ill-posed inverse problems.",
      pdfLink: "https://arxiv.org/pdf/2510.03352",
      codeLink: "https://github.com/mhdfb/sideinfo-search-reconstruction",
      bibtex: `@article{farahbakhsh2025inference,
  title={Inference-Time Search using Side Information for Diffusion-based Image Reconstruction},
  author={Farahbakhsh, Mahdi and Kunde, Vishnu Teja and Kalathil, Dileep and Narayanan, Krishna and Chamberland, Jean-Francois},
  journal={arXiv preprint arXiv:2510.03352},
  year={2025}
}`,
    },
    {
      title:
        "Real-Time Text Transmission via LLM-Based Entropy Coding over Fixed-Rate Channels",
      authors: "Vishnu Teja Kunde, Jean-Francois Chamberland, Krishna R. Narayanan, and Jamison Ebert",
      venue: "Asilomar (To appear)",
      year: 2026,
      description:
        "Proposed real-time text transmission over fixed-rate channels using LLM-based entropy coding.",
      pdfLink: "https://arxiv.org/pdf/2605.01991",
      bibtex: `@misc{kunde2026realtimetexttransmissionllmbased,
  title={Real-Time Text Transmission via LLM-Based Entropy Coding over Fixed-Rate Channels},
  author={Vishnu Teja Kunde and Jean-Francois Chamberland and Krishna R. Narayanan and Jamison Ebert},
  year={2026},
  eprint={2605.01991},
  archivePrefix={arXiv},
  primaryClass={cs.IT},
  url={https://arxiv.org/abs/2605.01991}
}`,
    },
    {
      title:
        "Transformers are Provably Optimal In-context Estimators for Wireless Communications",
      authors: "Vishnu Teja Kunde, Vicram Rajagopalan, Chandra Shekhara Kaushik Valmeekam, Krishna Narayanan, Srinivas Shakkottai, Dileep Kalathil, and Jean-Francois Chamberland",
      venue: "AISTATS",
      year: 2025,
      description:
        "Proved optimality results for transformers as in-context estimators, providing theoretical guarantees and deeper understanding of attention-driven inference.",
      pdfLink: "https://raw.githubusercontent.com/mlresearch/v258/main/assets/kunde25a/kunde25a.pdf",
      codeLink: "https://github.com/vishnutez/in-context-estimation",
      bibtex: `@inproceedings{kunde2025transformersare,
  title={Transformers are Provably Optimal In-context Estimators for Wireless Communications},
  author={Kunde, Vishnu Teja and Rajagopalan, Vicram and Valmeekam, Chandra Shekhara Kaushik and Narayanan, Krishna and Chamberland, Jean-Francois and Kalathil, Dileep and Shakkottai, Srinivas},
  booktitle={Proceedings of The 28th International Conference on Artificial Intelligence and Statistics},
  year={2025}
}`,
    },
    {
      title:
        "Approximate Message Passing for Multi-Preamble Detection in OTFS Random Access",
      authors: "Alessandro Mirri, Vishnu Teja Kunde, Enrico Paolini, and Jean-Francois Chamberland",
      venue: "ICASSP",
      year: 2026,
      description:
        "We propose an approximate message passing algorithm for multi-preamble detection in OTFS random access.",
      pdfLink: "https://arxiv.org/pdf/2509.03980",
      bibtex: `@inproceedings{11460473,
  author={Mirri, Alessandro and Kunde, Vishnu Teja and Paolini, Enrico and Chamberland, Jean-Francois},
  booktitle={ICASSP 2026 - 2026 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  title={Approximate Message Passing for Multi-Preamble Detection in OTFS Random Access},
  year={2026},
  pages={21491-21495},
  keywords={Antennas;Radio broadcasting;Frequency modulation;System-on-chip;Application specific integrated circuits;Modulation;Instant messaging;Massive machine type communications;Telecommunications;Communications technology;OTFS (Orthogonal Time Frequency Space);Preamble Detection;Random Access;Complex Sparse Group LASSO;Approximate Message Passing (AMP)},
  doi={10.1109/ICASSP55912.2026.11460473}
}`,
    },
  ];

  const articles = [
    {
      title:
        "\"Causally\" Explained: The Attention Mechanism in Transformers",
      date: "Nov 2025",
      description:
        "A comprehensive guide to attention mechanisms, covering self-attention, cross-attention, and their ubiquity in modern AI systems transformer architectures.",
      link: "#",
    },
    {
      title:
        "Flow Matching: The Deterministic Cousin of Diffusion Modeling",
      date: "Nov 2025",
      description:
        "A gentle introduction to flow matching, a deterministic version of diffusion modeling, and its impact in generative modeling.",
      link: "#",
    },
    {
      title: "Variational Auto-encoder: The Ancestor of Diffusion",
      date: "Nov 2025",
      description:
        "An exploration and understanding of variational auto-encoders, and its evolution into diffusion models.",
      link: "#",
    },
    {
      title: "Get Good by Reinforcing: From PPO to GRPO",
      date: "Nov 2025",
      description:
        "A gentle introduction to GRPO, a reinforcement learning algorithm for improving the performance of policy gradient methods.",
      link: "#",
    },
  ];

  const tabs = [
    { id: "about" as const, label: "Home" },
    { id: "publications" as const, label: "Publications" },
    ...(SHOW_ARTICLES_SECTION ? [{ id: "articles" as const, label: "Technical Articles" }] : []),
    { id: "background" as const, label: "Background" },
  ];

  return (
    <div
      className={`h-screen flex flex-col ${theme === "dark" ? "bg-black" : "bg-gray-50"}`}
    >
      {/* Navigation - Fixed */}
      <nav
        className={`border-b ${theme === "dark" ? "border-gray-700 bg-black" : "border-gray-300 bg-gray-50"} relative flex-shrink-0 sticky top-0 z-10`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-[#FF4500] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8 justify-center items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 transition-colors text-lg ${
                  activeTab === tab.id
                    ? "text-[#FF4500]"
                    : (theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900")
                }`}
              >
                {tab.label}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className={`py-4 px-2 transition-colors ${
                theme === "dark"
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content - Scrollable */}
      <div id="content-area" className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12 justify-center">
            {/* Profile Sidebar - only show on About tab */}
            {activeTab === "about" && (
              <aside className="lg:w-80 flex-shrink-0">
                <ProfileSidebar
                  imageSrc={profileData.imageSrc}
                  name={profileData.name}
                  title={profileData.title}
                  links={profileData.links}
                  theme={theme}
                />
              </aside>
            )}

            {/* Content Area */}
            <main className="flex-1 max-w-4xl">
            {activeTab === "about" && (
              <div className="space-y-12">
                <AboutSection
                  bio={aboutData.bio}
                  updates={aboutData.updates}
                  theme={theme}
                />
                <CurrentProjectSection theme={theme} />
                <ResearchInterestsSection theme={theme} />
                <SelectedPapersSection
                  papers={selectedPapers}
                  theme={theme}
                />
              </div>
            )}
            {activeTab === "publications" && (
              <PublicationsSection
                publications={publications}
                theme={theme}
              />
            )}
            {activeTab === "articles" && SHOW_ARTICLES_SECTION && (
              <TechnicalArticlesSection
                articles={articles}
                theme={theme}
              />
            )}
            {activeTab === "background" && (
              <div className="space-y-10">
                <ExperienceSection
                  experience={aboutData.experience}
                  theme={theme}
                />
                <EducationSection
                  education={aboutData.education}
                  theme={theme}
                />
              </div>
            )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}