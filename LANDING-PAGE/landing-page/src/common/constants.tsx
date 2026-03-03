import type { ContactInformation, Media } from "../types/type"
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