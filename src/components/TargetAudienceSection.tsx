import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const audiences = [
  {
    title: 'Entrepreneurs',
    description: 'Scale your business without scaling your stress. Let Brainvx handle operations while you focus on growth.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/409656/2025-12-29/d2245c81-8c08-4b4c-8634-c05ca0e74cce.png'
  },
  {
    title: 'Freelancers',
    description: 'Juggle multiple clients and projects effortlessly. Brainvx keeps everything organized and on track.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/409656/2025-12-29/0aff4dc2-86fc-443b-a9ab-a35569cfa6e1.png'
  },
  {
    title: 'Small Teams',
    description: 'Coordinate team efforts seamlessly. Brainvx ensures everyone knows what to do and when.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/409656/2025-12-29/1d8c051c-b655-4c81-b5c0-cbe7986a7b4b.png'
  },
  {
    title: 'Busy Individuals',
    description: 'Reclaim your time and mental energy. Let AI handle the complexity of modern life.',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/409656/2025-12-29/e641413b-634a-4c67-bbf9-773353c471ec.png'
  }
];

export default function TargetAudienceSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-[#0A0A0A] to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who Brainvx Is For
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Built for ambitious people who want to achieve more without burning out
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="bg-[#0A0A0A] border-[#1A1A1A] hover:border-[#8B5CF6] transition-all duration-300 hover:glow-purple group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="w-full h-64 rounded-t-lg overflow-hidden">
                  <img
                    src={audience.image}
                    alt={audience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl text-white mb-3">{audience.title}</CardTitle>
                <p className="text-gray-400 leading-relaxed">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}