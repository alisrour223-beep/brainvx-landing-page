import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function BetaSignupSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    feedback: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', userType: '', feedback: '' });
    }, 3000);
  };

  return (
    <section id="beta-signup" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-black to-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-black border-[#1A1A1A] glow-blue animate-in fade-in duration-700">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get Early Access
            </CardTitle>
            <CardDescription className="text-lg text-gray-400">
              Join the beta and be among the first to experience Brainvx
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#0A0A0A] border-[#1A1A1A] focus:border-[#00D9FF] text-white"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#0A0A0A] border-[#1A1A1A] focus:border-[#00D9FF] text-white"
                    placeholder="your@email.com"
                  />
                </div>

                {/* User Type */}
                <div className="space-y-2">
                  <Label htmlFor="userType" className="text-white">I am a *</Label>
                  <Select
                    value={formData.userType}
                    onValueChange={(value) => setFormData({ ...formData, userType: value })}
                    required
                  >
                    <SelectTrigger className="bg-[#0A0A0A] border-[#1A1A1A] focus:border-[#00D9FF] text-white">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0A0A0A] border-[#1A1A1A] text-white">
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Optional Feedback */}
                <div className="space-y-2">
                  <Label htmlFor="feedback" className="text-white">
                    What do you want Brainvx to run for you? (Optional)
                  </Label>
                  <Textarea
                    id="feedback"
                    value={formData.feedback}
                    onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                    className="bg-[#0A0A0A] border-[#1A1A1A] focus:border-[#00D9FF] text-white min-h-[100px]"
                    placeholder="Tell us about your biggest productivity challenges..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-blue-purple hover:opacity-90 text-white font-semibold py-6 text-lg rounded-lg glow-blue transition-all duration-300 hover:glow-blue-strong"
                >
                  Get Early Access
                </Button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-500">
                <CheckCircle2 className="h-16 w-16 text-[#00D9FF] mx-auto" />
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-gray-400">
                  We've received your request. You'll hear from us soon with exclusive beta access details.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}