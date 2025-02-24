import { createContext, useContext, useState } from "react";

type Section = "tutoring" | "ishtgroup";

interface SectionContextType {
  section: Section;
  setSection: (section: Section) => void;
}

const SectionContext = createContext<SectionContextType>({
  section: "tutoring",
  setSection: () => {},
});

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [section, setSection] = useState<Section>("tutoring");

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);
