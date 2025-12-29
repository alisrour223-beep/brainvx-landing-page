import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const handleJoinBeta = () => {
    document.getElementById('beta-signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://mgx-backend-cdn.metadl.com/generate/images/409656/2025-12-29/5e0f2dae-eec6-46a9-9cef-b9e8266aaf54.png"
          alt="AI Neural Network"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-gradient">Brainvx</span>
            <br />
            <span className="text-white">Your AI Brain to Run</span>
            <br />
            <span className="text-white">Your Life & Business</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            An AI operating brain that organizes your tasks, emails, and decisions — so you move faster, stay focused, and get more done.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={handleJoinBeta}
              size="lg"
              className="bg-gradient-blue-purple hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-lg glow-blue transition-all duration-300 hover:glow-blue-strong"
            >
              Join the Beta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="!bg-transparent border-2 border-[#00D9FF] text-[#00D9FF] hover:!bg-[#00D9FF] hover:text-black font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Floating Animation Element */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-[#00D9FF] rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#8B5CF6] rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}