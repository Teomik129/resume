import React from "react";

import { Experience } from "./Experience";
import { Volunteer, Work } from "./IResume";
import { Section } from "./Section";

export const Experiences: React.FC<{
  exps: (Work | Volunteer)[];
  type: "work" | "volunteer";
}> = ({ exps, type }) => (
  <Section title={type === "work" ? "Professional Experience" : "Volunteering"}>
    {exps.map((w) => (
      <Experience key={w.summary} exp={w} />
    ))}
  </Section>
);
