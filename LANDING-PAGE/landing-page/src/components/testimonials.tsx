import { testiomonials } from "../common/constants";
import type { Testiomonial } from "../types/type";
import { TestimonialCard } from "./testimonial-card";

export const Testimonials = () => {
    return (
        <div className="flex flex-col gap-6 items-center pt-6 relative w-[320px] md:w-120 mx-auto xl:flex-row xl:w-230">
            <img src="/images/bg-quotes.png" alt="bg quotes" className="size-6 absolute top-0 left-8" />
            {
                testiomonials.map((testimonial: Testiomonial) => (
                    <TestimonialCard key={testimonial.name} {...testimonial} />
                ))
            }
        </div>
    )
}
