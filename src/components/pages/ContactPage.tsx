import { useState } from "react";
import { Mail, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SocialLinks from "@/components/SocialLinks";
import { CONTACT_INFO } from "@/lib/constants";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

const N8N_WEBHOOK_URL = "https://nairobiaicommunity.app.n8n.cloud/webhook/form-submission";

const ContactPage = ({ onNavigate }: ContactPageProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({ title: "Failed to send message", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen py-8 px-8 md:px-16 lg:px-24 bg-transparent">
      {/* Page Header */}
      <Header onNavigate={onNavigate} />
      
      <div className="max-w-5xl mx-auto pt-8">
        {/* Section Header */}
        <div className="mb-16 opacity-0 animate-fade-in-up animation-delay-100">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">Let's create something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8 opacity-0 animate-fade-in-up animation-delay-100">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you. I'm always open to discussing new opportunities and ideas.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <SocialLinks variant="footer" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <form onSubmit={handleSubmit} className="space-y-6 certification-card">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name *
                </label>
                <Input id="name" placeholder="John Doe" className="bg-background border-border" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} required />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address *
                </label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} required />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input id="subject" placeholder="Project inquiry" className="bg-background border-border" value={formData.subject} onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))} />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background border-border resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</> : "Send Message"}
              </Button>
            </form>
          </div>
        </div>

        {/* Availability Status */}
        <div className="mt-16 text-center opacity-0 animate-fade-in-up animation-delay-300">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-secondary-foreground">Currently available for freelance projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
