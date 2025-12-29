import { Card, CardContent } from '@/components/ui/card';
import { Quote, Rocket } from 'lucide-react';

const testimonials = [
  {
    quote: "I can't wait to see how Brainvx will transform my daily workflow. The concept is exactly what I've been looking for.",
    author: "Sarah Chen",
    role: "Startup Founder"
  },
  {
    quote: "Finally, an AI that understands the chaos of running a business. This could be a game-changer for entrepreneurs.",
    author: "Marcus Rodriguez",
    role: "Digital Agency Owner"
  },
  {
    quote: "The idea of having an AI COO working 24/7 is incredible. I'm excited to be part of the beta.",
    author: "Emily Watson",
    role: "Freelance Consultant"
  }
];

export default function SocialProofSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Launch Announcement */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-gradient-blue-purple px-6 py-3 rounded-full mb-6 glow-blue">
            <Rocket className="h-5 w-5 text-white" />
            <span className="text-white font-semibold">Launching Soon</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Early Users for Exclusive Access
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Be among the first to experience Brainvx and shape the future of AI-powered productivity
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#0A0A0A] border-[#1A1A1A] hover:border-[#00D9FF] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-[#00D9FF] opacity-50" />
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-[#1A1A1A]">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}