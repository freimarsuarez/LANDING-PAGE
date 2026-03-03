interface Props {
    text: string;
}

export const FooterListItem = ({ text }: Props) => {
    return (
        <li className="mb-1.5">
            <a className="hover:text-teal-200" href="#">
                {text}
            </a>
        </li>
    )
}
