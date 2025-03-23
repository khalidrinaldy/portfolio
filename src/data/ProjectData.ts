import type { ProjectInterface } from "../models/Project";
import imgNISA from "../assets/images/img_nisa.png"
import imgOttoParking from "../assets/images/img_ottoparking.png"
import imgNITA from "../assets/images/img_nita.png"

export const ProjectData: ProjectInterface[] = [
    {
        title: "NISA",
        description: "A robust mobile app for highway operations and maintenance reporting, expertly developed using Flutter.",
        image: imgNISA,
        link: "https://play.google.com/store/apps/details?id=com.nusantarainfrastructure.nisa",
    },
    {
        title: "Otto Parking",
        description: "A powerful mobile app that allows users to reserve parking at their favorite destinations.",
        image: imgOttoParking,
        link: "https://play.google.com/store/apps/details?id=com.nusantarainfrastructure.ottoparking",
    },
    {
        title: "NITA",
        description: "A loyalty app designed for toll road users of the company.",
        image: imgNITA,
        link: "https://play.google.com/store/apps/details?id=com.nusantarainfrastructure.nuframobile",
    },
]