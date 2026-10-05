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
          Multi-Agent Collaboration in LLMs
        </h4>
        <p
          className={`mb-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I am exploring non-parametric and parametric learning in complex LLM tasks using collaborative frameworks.
        </p>
      </div>
    </section>
  );
}