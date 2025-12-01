import React from "react";

interface ResearchInterestsSectionProps {
  theme: "dark" | "light";
}

export function ResearchInterestsSection({
  theme,
}: ResearchInterestsSectionProps) {
  const isDark = theme === "dark";

  return (
    <section className="space-y-4">
      <h2
        className={`text-2xl font-semibold ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Research Interests
      </h2>

      <ul
        className={`research-interests-list space-y-2 pl-6 leading-relaxed ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
        style={{ listStyleType: "circle" }}
      >
        <style>{`
          .research-interests-list li::marker {
            color: #FF4500;
            font-size: 1.2em;
          }
        `}</style>
        <li>
          <span className="font-medium">
            Diffusion models &amp; diffusion-LLMs
          </span>{" "}
          — controllable generation, reasoning, conditioning, and fine-tuning.
        </li>
        <li>
          <span className="font-medium">Reinforcement learning for reasoning</span>{" "}
          — RLHF, GRPO-style methods, and policy optimization for generative
          models.
        </li>
        <li>
          <span className="font-medium">
            In-context learning &amp; representation learning
          </span>
          .
        </li>
        <li>
          <span className="font-medium">Deep learning theory</span> —
          information-theoretic methods, high-dimensional statistics, and
          generalization.
        </li>
      </ul>
    </section>
  );
}


