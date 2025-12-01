interface CurrentProjectSectionProps {
  theme: "dark" | "light";
}

export function CurrentProjectSection({ theme }: CurrentProjectSectionProps) {
  return (
    <section className="space-y-6">
      <h3
        className={`text-2xl ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Current Project
      </h3>

      <div
        className={`p-6 rounded-lg border-l-4 border-[#FF4500] transition-colors ${
          theme === "dark"
            ? "bg-[#2d2d2d] hover:bg-gray-750"
            : "bg-white hover:bg-gray-50 border border-gray-200"
        }`}
      >
        <h4
          className={`mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Improving Reasoning in Diffusion LLMs using Reinforcement Learning
        </h4>

        <p
          className={`mb-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I am designing RL methods to improve the reasoning capabilities of diffusion-based LLMs. Because diffusion LLMs don't expose tractable likelihoods, standard policy-gradient RL cannot be applied directly. My research develops diffusion-specific RL objectives and gradient estimators that make reasoning-oriented fine-tuning stable and effective.
        </p>

        <div className="flex gap-3">
          <a
            href="https://github.com/vishnutez/d1"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-1.5 rounded-md border transition-colors font-mono text-sm ${
              theme === "dark"
                ? "border-white text-white hover:bg-[#FF4500] hover:border-[#FF4500]"
                : "border-gray-900 text-gray-900 hover:bg-[#FF4500] hover:border-[#FF4500] hover:text-white"
            }`}
          >
            CODE
          </a>
        </div>
      </div>
    </section>
  );
}