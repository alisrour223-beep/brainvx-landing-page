import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Mail, Calendar, Brain, Clock } from 'lucide-react';

const features = [
  {
    icon: CheckCircle2,
    title: 'Smart Task & Priority Planning',
    description: 'AI automatically organizes your tasks by importance, urgency, and impact. Never wonder what to do next.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/409656/2025-12-29/31c95de6-cb54-477e-94f5-32a3be10061d.png'
  },
  {
    icon: Mail,
    title: 'Email & Message Assistance',
    description: 'Brainvx reads, categorizes, and suggests responses to your emails. Inbox zero becomes effortless.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/409656/2025-12-29/5f3ae8da-e867-4efb-aaab-5b7bb9a6d536.png'
  },
  {
    icon: Calendar,
    title: 'Daily Action Plans',
    description: 'Wake up to a clear plan. AI tells you exactly what to do today based on your goals and priorities.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/409656/2025-12-29/646bb3d2-d2d6-44d9-ac50-238622b9951e.png'
  },
  {
    icon: Brain,
    title: 'Decision Support with Risk Awareness',
    description: 'Get AI-powered insights and risk analysis for important decisions. Make smarter choices, faster.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/409656/2025-12-29/5a023414-1bcc-4396-9b9e-b70484b332be.png'
  },
  {
    icon: Clock,
    title: 'Works 24/7 Like a Personal AI COO',
    description: 'Brainvx never sleeps. It monitors, organizes, and optimizes your operations around the clock.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/409656/2025-12-29/02a4fcad-772c-428a-9edc-fd6149d3af8e.png'
  }
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key Features
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Brainvx combines powerful AI capabilities to transform how you work and live
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black border-[#1A1A1A] hover:border-[#00D9FF] transition-all duration-300 hover:glow-blue group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-[#00D9FF]/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-[#00D9FF]" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}