import type { ContactInformation, Feature, Media, Testiomonial } from "../types/type"
import { FacebookIcon } from "../components/footer/facebook-icon"
import { Instagram } from "../components/footer/instagram"
import { XIcon } from "../components/footer/x-icon"

export const contactInformation: ContactInformation[] = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        iconUrl: "/images/icon-location.svg",
        alt: "location"
    },
    {
        text: "+1-543-123-4567",
        iconUrl: "/images/icon-phone.svg",
        alt: "phone"
    },
    {
        text: "example@fylo.com",
        iconUrl: "/images/icon-email.svg",
        alt: "email"
    }
]

export const pages: string[] = [
    "About Us",
    "Jobs",
    "Press",
    "Blog"
]

export const conditions: string[] = [
    "Contact Us",
    "Terms",
    "Privacy",
]

export const medias: Media[] = [
    {
        text: "facebook",
        icon: <FacebookIcon />,
    }, {
        text: "x",
        icon: <XIcon />,
    }, {
        text: "instagram",
        icon: <Instagram />,
    }
]

export const features: Feature[] = [
    {
        title: "Access your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        iconUrl: "/images/icon-access-anywhere.svg"
    },
    {
        title: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
        iconUrl: "/images/icon-security.svg"
    },
    {
        title: "Real-time collaboration",
        description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
        iconUrl: "/images/icon-collaboration.svg"
    },
    {
        title: "Store any type of file",
        description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        iconUrl: "/images/icon-any-file.svg"
    },
]

export const testiomonials: Testiomonial[] = [
    {
        name: "Satish Patel",
        role: "Founder & CEO, Huddle",
        imagen: "/images/profile-1.jpg",
        quote: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    },
    {
        name: "Bruce McKenzie",
        role: "Founder & CEO, Huddle",
        imagen: "/images/profile-2.jpg",
        quote: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    },
    {
        name: "Iva Boyd",
        role: "Founder & CEO, Huddle",
        imagen: "/images/profile-3.jpg",
        quote: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    }
]
