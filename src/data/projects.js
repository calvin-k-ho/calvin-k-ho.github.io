import projectHubCover from "../assets/images/Hub/hero.png";
import salesCompCover from "../assets/images/SalesComp/hero.png";
import BoBCover from "../assets/images/BoB/hero.png";
import tpiCover from "../assets/images/TPI/hero.png";
import STEMForKidsCover from "../assets/images/STEMForKids/hero.png";

const projects = [
    {
        to: "/works/sales-compensation",
        client: "Enterprise Telecommunications",
        title: "AI-Assisted Compensation Planning",
        summary: "Independently developed an AI-assisted compensation planning concept, from process discovery to an interactive prototype that is now moving into development.",
        image: salesCompCover,
        imageAlt: "AI-assisted compensation planning dashboard",
        accent: "#067AB4",
        panel: "#e8eef6",
        delay: "200",
    },
    {
        to: "/works/project-management-platform",
        client: "Enterprise Telecommunications",
        title: "AI-Assisted Project Hub",
        summary: "Shaped one project management platform for three business units with different structures, workflows, and approval paths.",
        image: projectHubCover,
        imageAlt: "Project management platform",
        accent: "#0B3A75",
        panel: "#e7eef7",
        delay: "250",
    },
    {
        to: "/works/book-of-business",
        client: "Global and U.S. Surety Provider",
        title: "Book of Business",
        summary: "Designed a self-service tool that lets insurance agencies look up, track, and manage surety bonds without calling the service center, launched as an MVP in 2020.",
        image: BoBCover,
        imageAlt: "Book of Business web app",
        accent: "#FFD000",
        panel: "#f3eee5",
        delay: "300",
    },
    {
        to: "/works/the-pathway-initiative",
        client: "Develop for Good",
        title: "The Pathway Initiative",
        summary: "A nonprofit website redesign that leads with story and makes donating, volunteering, and sponsoring the obvious next step, with a brand system to scale on.",
        image: tpiCover,
        imageAlt: "The Pathway Initiative website",
        accent: "#251C51",
        panel: "#ececf4",
        delay: "500",
    },
    {
        to: "/works/stem-for-kids",
        client: "Academic Project",
        title: "STEM For Kids",
        summary: "A mobile app concept that personalizes STEM learning for K–12 students, from research and wireframes to high-fidelity designs.",
        image: STEMForKidsCover,
        imageAlt: "STEM For Kids Mobile App Design",
        accent: "#251C51",
        panel: "rgb(232, 241, 234)",
        delay: "600",
    }
];

export default projects;
