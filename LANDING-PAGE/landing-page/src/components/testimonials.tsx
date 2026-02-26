import { TestimonialCard } from "./testimonial-card";

interface Testiomonial {
    name: string;
    role: string;
    imagen: string;
    quote: string;
}

const testiomonials: Testiomonial[] = [
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


export const Testimonials = () => {
    return (
        <div className="flex flex-col gap-6 items-center pt-6 relative">
            <img src="/images/bg-quotes.png" alt="bg quotes" className="size-6 absolute top-0 left-8" />
            {
                testiomonials.map((testimonial: Testiomonial) => (
                    <TestimonialCard key={testimonial.name} {...testimonial} />
                ))
            }
        </div>
    )
}
