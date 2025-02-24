import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Programs from "@/pages/programs";
import Tutoring from "@/pages/tutoring";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Success from "@/pages/success";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/programs" component={Programs} />
        <Route path="/tutoring" component={Tutoring} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/success" component={Success} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}