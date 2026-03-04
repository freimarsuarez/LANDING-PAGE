interface Props {
    name: string;
    role: string;
    imagen: string;
    quote: string;
}

export const TestimonialCard = ({ name, role, imagen, quote }: Props) => {
    return (
        <div key={name} className="bg-Navy-850 rounded-lg p-6 ">
            <blockquote className="text-[.75rem] mb-4">{quote}</blockquote>
            <div className="flex gap-2 items-center">
                <img src={imagen} alt={name} className="size-6 rounded-full" />
                <div>
                    <h3 className="font-bold text-[12px]">{name}</h3>
                    <p className="text-[8.5px]">{role}</p>
                </div>
            </div>
        </div>
    )
}
