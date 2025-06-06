export interface Education {
  years: string;
  program: string;
  school: string;
  location: string;
}

export const education: Education[] = [
  {
    years: "2005",
    program: "Militær førstegangs tjeneste",
    school: "Værnes Militærbase",
    location: "Trondheim",
  },
  {
    years: "2002-2003",
    program: "Tømrer VK1",
    school: "Sogn Vgs",
    location: "Oslo",
  },
  {
    years: "2001-2002",
    program: "Byggfag Grunnkurs",
    school: "Sogn Vgs",
    location: "Oslo",
  },
];
