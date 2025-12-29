import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import SocialProofSection from '@/components/SocialProofSection';
import BetaSignupSection from '@/components/BetaSignupSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <TargetAudienceSection />
      <SocialProofSection />
      <BetaSignupSection />
      <Footer />
    </div>
  );
}