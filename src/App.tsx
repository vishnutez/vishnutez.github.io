import { useState, useEffect } from "react";
import { ProfileSidebar } from "./components/ProfileSidebar";
import { AboutSection } from "./components/AboutSection";
import { PublicationsSection } from "./components/PublicationsSection";
import { TechnicalArticlesSection } from "./components/TechnicalArticlesSection";
import { EducationSection } from "./components/EducationSection";
import { SelectedPapersSection } from "./components/SelectedPapersSection";
import { Sun, Moon } from "lucide-react";
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
        "Inference-Time Search using Side Information for Diffused-Based Image Reconstruction",
      authors: "Mahdi Farahbakhsh*, Vishnu Teja Kunde*, Dileep Kalathil, Krishna Narayanan, and Jean-Francois Chamberland",
      venue: "arXiv Preprint",
      year: 2025,
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
        "Inference-Time Search using Side Information for Diffusion-based Image Reconstruction",
      authors: "Mahdi Farahbakhsh*, Vishnu Teja Kunde*, Dileep Kalathil, Krishna Narayanan, and Jean-Francois Chamberland",
      venue: "arXiv Preprint",
      year: 2025,
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
    {
      title:
        "Approximate Message Passing for Multi-Preamble Detection in OTFS Random Access",
      authors: "Alessandro Mirri, Vishnu Teja Kunde, Enrico Paolini, and Jean-Francois Chamberland",
      venue: "arXiv Preprint",
      year: 2025,
      description:
        "We propose an approximate message passing algorithm for multi-preamble detection in OTFS random access.",
      pdfLink: "https://arxiv.org/pdf/2509.03980",
      bibtex: `@article{mirri2025approximate,
  title={Approximate Message Passing for Multi-Preamble Detection in OTFS Random Access},
  author={Mirri, Alessandro and Kunde, Vishnu Teja and Paolini, Enrico and Chamberland, Jean-Francois},
  journal={arXiv preprint arXiv:2509.03980},
  year={2025}
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
              <EducationSection
                education={aboutData.education}
                theme={theme}
              />
            )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}