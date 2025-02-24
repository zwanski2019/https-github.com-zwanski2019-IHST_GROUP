import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Here you would typically send the data to your backend
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsSubmitting(false);
    form.reset();
    alert("Thank you for your message. We'll get back to you soon!");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "contact@ishtgroup.com",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "123 Education Street, Learning City, 12345",
    },
    {
      icon: Clock,
      title: "Hours",
      detail: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#92220F]/10 to-[#995A4E]/10 opacity-50" />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#92220F]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-[#995A4E]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <main className="container mx-auto px-4 py-16">
          <h1 className="font-aquawax text-4xl sm:text-5xl md:text-6xl text-center mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Contact Us
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl text-center max-w-2xl mx-auto mb-16">
            Have questions? We're here to help. Reach out to us through any of the following channels
            or fill out the contact form below.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#92220F] to-[#995A4E] flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-aquawax text-xl mb-2">{info.title}</h3>
                  <p className="text-white/60">{info.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto bg-white/5 border-white/10">
            <CardContent className="p-6">
              <h2 className="font-aquawax text-2xl mb-6">Send us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                            placeholder="Your name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                            placeholder="Your email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Subject</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                            placeholder="Message subject"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[100px]"
                            placeholder="Your message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#92220F] to-[#995A4E] text-white hover:opacity-90"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
