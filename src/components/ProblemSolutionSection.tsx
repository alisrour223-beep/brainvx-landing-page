import { AlertCircle, Sparkles } from 'lucide-react';

export default function ProblemSolutionSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-black to-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Problem */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">The Problem</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every day, people waste <span className="text-[#00D9FF] font-semibold">hours</span> drowning in:
            </p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-[#00D9FF] mt-1">•</span>
                <span>Endless emails that never get properly organized</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00D9FF] mt-1">•</span>
                <span>Tasks that pile up without clear priorities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00D9FF] mt-1">•</span>
                <span>Decisions that drain mental energy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00D9FF] mt-1">•</span>
                <span>Digital chaos across multiple tools and platforms</span>
              </li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed pt-4">
              The result? <span className="text-red-500 font-semibold">Burnout, missed opportunities, and constant overwhelm.</span>
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-[#00D9FF]" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">The Solution</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-gradient font-bold text-xl">Brainvx</span> turns daily noise into <span className="text-[#00D9FF] font-semibold">clear actions and priorities</span> using AI.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#8B5CF6] mt-1">✓</span>
                <span>Automatically organize and prioritize everything</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B5CF6] mt-1">✓</span>
                <span>Get AI-powered daily action plans</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B5CF6] mt-1">✓</span>
                <span>Make better decisions with risk awareness</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B5CF6] mt-1">✓</span>
                <span>Work 24/7 like your personal AI COO</span>
              </li>
            </ul>
            <div className="pt-6 p-6 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg glow-blue">
              <p className="text-[#00D9FF] font-semibold text-lg">
                Stop managing chaos. Let Brainvx run your operations while you focus on what matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}