import { useState } from "react";
import { Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SocialLinks from "@/components/SocialLinks";
import { CONTACT_INFO } from "@/lib/constants";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

const N8N_WEBHOOK_URL = "https://nairobiaicommunity.app.n8n.cloud/webhook/form-submission";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address").max(255, "Email must be under 255 characters"),
  subject: z.string().trim().max(200, "Subject must be under 200 characters").optional().default(""),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = ({ onNavigate }: ContactPageProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const { toast } = useToast();

  const validateField = (field: keyof ContactFormData, value: string) => {
    try {
      contactSchema.shape[field].parse(value);
      setErrors(prev => ({ ...prev, [field]: undefined }));
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [field]: err.errors[0]?.message }));
      }
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      validateField(field, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      toast({ title: "Failed to send message", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-8 px-8 md:px-16 lg:px-24 bg-transparent">
      <Header onNavigate={onNavigate} />
      
      <div className="max-w-5xl mx-auto pt-8">
        <div className="mb-16 opacity-0 animate-fade-in-up animation-delay-100">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">Let's create something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8 opacity-0 animate-fade-in-up animation-delay-100">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you. I'm always open to discussing new opportunities and ideas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-foreground hover:text-primary transition-colors">
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

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <SocialLinks variant="footer" />
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            {isSuccess ? (
              <div className="certification-card flex flex-col items-center justify-center py-16 text-center animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-scale-in">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 certification-card">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Your Name *</label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className={`bg-background border-border ${errors.name ? "border-destructive" : ""}`}
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => validateField("name", formData.name)}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={`bg-background border-border ${errors.email ? "border-destructive" : ""}`}
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => validateField("email", formData.email)}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <Input
                    id="subject"
                    placeholder="Project inquiry"
                    className="bg-background border-border"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`bg-background border-border resize-none ${errors.message ? "border-destructive" : ""}`}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => validateField("message", formData.message)}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</> : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 text-center opacity-0 animate-fade-in-up animation-delay-300">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-secondary-foreground">Currently available for freelance projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
