export interface Course {
  year: string;
  institution: string;
  location: string;
  courseTitle: string;
  description: string;
}

export const courses: Course[] = [
  {
    year: "2016",
    institution: "Reaktorskolen",
    location: "Oslo",
    courseTitle: "Kontormedarbeider",
    description:
      "Korrespondanse, booking og møtearrangering. Kundebehandling, service og etikk. Resepsjon og sentralbord.",
  },
  {
    year: "2012",
    institution: "Høydespesialisten",
    location: "Oslo",
    courseTitle: "Personløfter",
    description: "Teori og praksis mot kompetansebevis for personløftere.",
  },
  {
    year: "2011",
    institution: "Kurs om alkoholloven",
    location: "Oslo",
    courseTitle: "Lov om servering",
    description:
      "Kurs for å være stedsfortreder på serveringssted. Har også tidligere tilsvarende kurs for dagligvare",
  },
  {
    year: "2010",
    institution: "VSK sikkerhet",
    location: "Oslo",
    courseTitle: "Vekterkurs",
    description: "Del 1 teori og Del 2 praksis utført og bestått",
  },
  {
    year: "2006",
    institution: "Verge AS",
    location: "Oslo",
    courseTitle: "Ordensvakt kurs",
    description:
      "Kurs om ordensvaktyrket mot kursbevis og offentlig godkjenning gjennom politiet",
  },
];
