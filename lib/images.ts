// Image manifest: real Leerand photographs with descriptive alt text and a
// focal object-position so crops keep the subject visible across breakpoints
// (see design.md image spec). `pos` maps to Tailwind/`object-position`.

export type SiteImage = {
  src: string;
  alt: string;
  pos?: string; // object-position value, e.g. "center 30%"
};

export const img = {
  logo: {
    src: "/images/leerand-logo.jpg",
    alt: "Leerand School Thika crest — Learn, Innovate, Succeed",
  },

  // Hero / community / campus
  studentsClimbing: {
    src: "/images/students-climbing.jpg",
    alt: "Leerand pupils playing on a climbing frame under a bright blue sky",
    pos: "center 35%",
  },
  communityDance: {
    src: "/images/community-dance.jpg",
    alt: "Leerand pupils and teachers dancing together with a live band at a school celebration",
    pos: "center 40%",
  },
  learnersMural: {
    src: "/images/learners-mural.jpg",
    alt: "Young Leerand learners gathered in front of a mural reading Learn, Innovate, Succeed",
    pos: "center 45%",
  },
  campus: {
    src: "/images/campus.png",
    alt: "The Leerand School campus in Thika with lawns, play areas and classroom blocks",
    pos: "center 60%",
  },

  // Learners / groups
  earlyYearsTrio: {
    src: "/images/early-years-trio.jpg",
    alt: "Three young Leerand pupils in uniform holding hands and smiling",
    pos: "center 30%",
  },
  earlyYearsClassroom: {
    src: "/images/early-years-classroom.png",
    alt: "Early-years Leerand children exploring a hands-on activity at a classroom table",
    pos: "center 35%",
  },
  studentsBoys: {
    src: "/images/students-boys.jpg",
    alt: "A group of Leerand boys in uniform outside the school building",
    pos: "center 40%",
  },
  studentsGirls: {
    src: "/images/students-girls.jpg",
    alt: "A group of Leerand girls in uniform, some in leadership blazers, smiling together",
    pos: "center 35%",
  },
  studentsFormal: {
    src: "/images/students-formal.jpg",
    alt: "Leerand learners in school blazers gathered in the courtyard",
    pos: "center 35%",
  },

  // Academics / STEM
  scienceChemistry: {
    src: "/images/science-chemistry.jpg",
    alt: "A Leerand learner in a lab coat and goggles carrying out a chemistry experiment",
    pos: "center 30%",
  },
  scienceElectricity: {
    src: "/images/science-electricity.jpg",
    alt: "Leerand learners working together on a hands-on electricity experiment",
    pos: "center 30%",
  },
  handsOnSkills: {
    src: "/images/hands-on-skills.png",
    alt: "Leerand learners presenting handmade projects, showing skills taught hands-on",
    pos: "center 40%",
  },

  // Activities
  creativityCrafts: {
    src: "/images/creativity-crafts.jpg",
    alt: "A Leerand pupil proudly showing a handmade beaded craft she created",
    pos: "center 30%",
  },
  musicGuitars: {
    src: "/images/music-guitars.jpg",
    alt: "Three Leerand children practising acoustic guitars together outdoors",
    pos: "center 40%",
  },
  danceBallet: {
    src: "/images/dance-ballet.jpg",
    alt: "Leerand pupils performing a ballet pose together on the school lawn",
    pos: "center 30%",
  },
  sportsRace: {
    src: "/images/sports-race.jpg",
    alt: "A young Leerand athlete finishing a race on sports day as the crowd cheers",
    pos: "center 40%",
  },
  sportsWinners: {
    src: "/images/sports-winners.jpg",
    alt: "Leerand learners celebrating with trophies and house flags at a prize-giving",
    pos: "center 35%",
  },
  sportsTugOfWar: {
    src: "/images/sports-tugofwar.jpg",
    alt: "Leerand teachers and pupils taking part in a tug-of-war on sports day",
    pos: "center 40%",
  },
  sportsCelebration: {
    src: "/images/sports-celebration.jpg",
    alt: "Leerand pupils and staff celebrating together with a school flag",
    pos: "center 35%",
  },
  playSwings: {
    src: "/images/play-swings.jpg",
    alt: "Leerand children playing on swings in the school playground",
    pos: "center 35%",
  },
} satisfies Record<string, SiteImage>;

export type ImgKey = keyof typeof img;
