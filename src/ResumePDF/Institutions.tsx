import React from "react";

import { Institution } from "./Institution";
import { Education } from "./IResume";
import { Section } from "./Section";

export const Institutions: React.FC<{ education: Education[] }> = ({
  education,
}) => {
  return (
    <Section title="Education">
      {education.map((edu) => (
        <Institution key={edu.institution} edu={edu} />
      ))}
    </Section>
  );
};
