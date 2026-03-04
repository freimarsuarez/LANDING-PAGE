import type { JSX } from "react";

export interface ContactInformation {
    text: string;
    iconUrl: string;
    alt: string;
}

export interface Media {
    text: string;
    icon: JSX.Element;
}

export interface Feature {
    title: string;
    description: string;
    iconUrl: string;
}


export interface Testiomonial {
    name: string;
    role: string;
    imagen: string;
    quote: string;
}