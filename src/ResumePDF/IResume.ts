export interface Basics {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  summary: string;
  website: string;
  location: {
    city: string;
    region: string;
  };
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: Date;
  endDate: Date;
  gpa: number;
}

export interface Work {
  company: string;
  position: string;
  website: string;
  startDate: Date;
  endDate: Date;
  summary: string;
  highlights: string[];
}

export interface Volunteer extends Omit<Work, "company"> {
  organization: string;
}
export interface Resume {
  basics: Basics;
  education: Education[];
  work: Work[];
  volunteer: Volunteer[];
}
