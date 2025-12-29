import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function BetaSignupSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xanyqbjr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          userType: formData.userType,
          feedback: formData.feedback,
          _replyto: formData.email,
          _subject: `New Brainvx Beta Signup from ${formData.name}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', userType: '', feedback: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="beta-signup" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-black to-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the Beta
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Be among the first to experience Brainvx. Limited spots available for early adopters.
          </p>
        </div>

        {/* Signup Form */}
        <Card className="bg-[#0A0A0A] border-[#1A1A1A] glow-blue animate-in fade-in slide-in-from-bottom-4 duration-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Get Early Access</CardTitle>
            <CardDescription className="text-gray-400">
              Fill out the form below and we'll send you an invite as soon as spots open up.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="John Doe"
                  className="bg-black border-[#1A1A1A] text-white focus:border-[#00D9FF] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="john@example.com"
                  className="bg-black border-[#1A1A1A] text-white focus:border-[#00D9FF] transition-colors"
                />
              </div>

              {/* User Type */}
              <div className="space-y-2">
                <Label htmlFor="userType" className="text-white">I am a... *</Label>
                <Select
                  value={formData.userType}
                  onValueChange={(value) => handleChange('userType', value)}
                  required
                >
                  <SelectTrigger className="bg-black border-[#1A1A1A] text-white focus:border-[#00D9FF]">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-[#1A1A1A]">
                    <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                    <SelectItem value="small-team">Small Team Leader</SelectItem>
                    <SelectItem value="busy-individual">Busy Individual</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Feedback */}
              <div className="space-y-2">
                <Label htmlFor="feedback" className="text-white">
                  What's your biggest productivity challenge? (Optional)
                </Label>
                <Textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={(e) => handleChange('feedback', e.target.value)}
                  placeholder="Tell us what you struggle with most..."
                  className="bg-black border-[#1A1A1A] text-white focus:border-[#00D9FF] transition-colors min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-blue-purple hover:opacity-90 text-white font-semibold py-6 text-lg rounded-lg glow-blue transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Successfully Submitted!
                  </>
                ) : (
                  'Request Beta Access'
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-center">
                    🎉 Thank you! We've received your application and will be in touch soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-center">
                    ❌ Something went wrong. Please try again or email us directly at beta@brainvx.com
                  </p>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Privacy Note */}
        <p className="text-center text-sm text-gray-500 mt-6">
          We respect your privacy. Your information will only be used to contact you about Brainvx beta access.
        </p>
      </div>
    </section>
  );
}