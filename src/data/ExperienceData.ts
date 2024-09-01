import type { Experience } from "../models/Experience";

export const ExperienceData: Experience[] = [
    {
        title: "Mobile Developer",
        company: "PT Nusantara Infrastructure",
        companyUrl: "https://nusantarainfrastructure.com/home",
        description: "Developed, and designed three applications with team for both internal and external applications. Collaborated with the team to develop features that adapt to evolving internal needs. Worked closely with representatives from each site to ensure that the developed features meet the operators' requirements.",
        start: new Date(2023, 3, 8),
        end: null,
    },
    {
        title: "Mobile Developer",
        company: "Pintro",
        companyUrl: "https://pintro.id/",
        description: "Developed a mobile application with an updated design, collaborating with UI/UX designers to achieve precise and accurate final slicing. The mobile application was a co-branding app, utilizing different flavors, icons, and colors for each brand.",
        start: new Date(2022, 11, 23),
        end: new Date(2023, 2, 25),
    },
    {
        title: "Mobile Developer Intern",
        company: "PT Nusantara Infrastructure",
        companyUrl: "https://nusantarainfrastructure.com/home",
        description: "Developed a parking reservation application from scratch and collaborated with the UI/UX team to establish an optimal user flow.",
        start: new Date(2022, 2, 11),
        end: new Date(2022, 7, 22),
    },
];