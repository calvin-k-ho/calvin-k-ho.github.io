import salesCompCover from "../assets/images/SalesComp/hero.png";
import ninersCover from "../assets/images/49ers/hero.png";
import BoBCover from "../assets/images/BoB/hero.png";
import tpiCover from "../assets/images/TPI/hero.png";
import PSEGCover from "../assets/images/PSEG/hero.png";

const projects = [
    {
        client: "AT&T",
        title: "Sales Compensation Dashboard",
        summary: "Led the end-to-end design of a sales compensation dashboard for modeling, comparing, and approving pay rates across 13,000 retail locations.",
        image: salesCompCover,
        imageAlt: "Sales compensation dashboard",
        accent: "#067AB4",
        panel: "#e8eef6",
        delay: "200",
    },
    {
        client: "San Francisco 49ers",
        title: "Faithful to the Bay",
        summary: "Reimagining a next-generation mobile experience designed to transform how fans engage with the 49ers, both on game day and year-round.",
        image: ninersCover,
        imageAlt: "49ers mobile app screens",
        accent: "#AA0000",
        panel: "#f5ece8",
        delay: "300",
    },
    {
        client: "PSE&G",
        title: "Energy Efficiency Customer Portal",
        summary: "A central front door to PSE&G's energy efficiency programs, plus a future-state portal for personalized savings, application status, and next steps.",
        image: PSEGCover,
        imageAlt: "PSE&G energy efficiency landing page",
        accent: "#F15A29",
        panel: "#e8edf3",
        delay: "500",
    },
    {
        client: "Liberty Mutual Surety",
        title: "Book of Business",
        summary: "Designed a self-service tool to empower agencies to seamlessly view, track, and manage clients and surety bonds end-to-end.",
        image: BoBCover,
        imageAlt: "Book of Business web app",
        accent: "#FFD000",
        panel: "#f3eee5",
        delay: "600",
    },
    {
        client: "Develop for Good",
        title: "The Pathway Initiative",
        summary: "A nonprofit website redesign that leads with story and makes donating, volunteering, and sponsoring the obvious next step with a full brand system to scale on.",
        image: tpiCover,
        imageAlt: "The Pathway Initiative website",
        accent: "#251C51",
        panel: "#ececf4",
        delay: "700",
    }
];

export default projects;
