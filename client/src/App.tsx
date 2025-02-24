import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { SectionProvider } from "./context/SectionContext";
import TutoringLayout from "./components/TutoringLayout";
import IshtgroupLayout from "./components/IshtgroupLayout";
import Landing from "./pages/landing";
import Home from "./pages/home";
import Programs from "./pages/programs";
import Tutoring from "./pages/tutoring";
import About from "./pages/about";
import Contact from "./pages/contact";
import Success from "./pages/success";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/ishtgroup*">
        <IshtgroupLayout>
          <Switch>
            <Route path="/ishtgroup" component={Home} />
            <Route path="/ishtgroup/about" component={About} />
            <Route path="/ishtgroup/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </IshtgroupLayout>
      </Route>
      <Route path="/tutoring*">
        <TutoringLayout>
          <Switch>
            <Route path="/tutoring" component={Home} />
            <Route path="/tutoring/programs" component={Programs} />
            <Route path="/tutoring/learn" component={Tutoring} />
            <Route path="/tutoring/about" component={About} />
            <Route path="/tutoring/contact" component={Contact} />
            <Route path="/tutoring/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </TutoringLayout>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <SectionProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </SectionProvider>
  );
}
