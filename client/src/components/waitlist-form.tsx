import { useState } from "react";
import { useLocation } from "wouter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { insertWaitlistSchema, type InsertWaitlistEntry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function WaitlistForm() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  
  const form = useForm<InsertWaitlistEntry>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: InsertWaitlistEntry) => {
      const res = await apiRequest("POST", "/api/waitlist", data);
      return res.json();
    },
    onSuccess: () => {
      navigate("/success");
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    },
  });

  return (
    <div className="max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => mutate(data))} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Full Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    placeholder="Enter your full name"
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
                    placeholder="Enter your email address"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-[#92220F] to-[#995A4E] text-white hover:opacity-90"
          >
            {isPending ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
