interface Props {
    text: string;
    iconUrl: string;
    alt: string;
}

export const ContactItem = ({ text, iconUrl, alt }: Props) => {
    return (
        <div className="flex gap-6 items-start">
            <img src={iconUrl} alt={alt} className="mt-1"/>
            <p>{text}</p>
        </div>
    )
}
