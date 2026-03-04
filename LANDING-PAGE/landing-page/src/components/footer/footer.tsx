import { conditions, contactInformation, medias, pages } from "../../common/constants";
import { ContactItem } from "./contact-item"
import { FooterListItem } from "./footer-list-item";

export const Footer = () => {
    return (
        <footer className="pt-60 pb-40 px-6">
            <img src="/images/logo.svg" alt="logo" className="mb-10" />

            <div className="flex flex-col gap-4 md:flex-row">
                <ContactItem styles="flex-1"  {...contactInformation[0]} />
                <div className="flex flex-col gap-4 flex-1">
                    {
                        contactInformation.slice(1, 4).map((contact) => (
                            <ContactItem key={contact.alt} {...contact} />
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-8 mt-16 md:flex-row md:gap-49">
                <ul>
                    {
                        pages.map((page) => (
                            <FooterListItem key={page} text={page} />
                        ))
                    }
                </ul>
                <ul>
                    {
                        conditions.map((conditions) => (
                            <FooterListItem key={conditions} text={conditions} />
                        ))
                    }
                </ul>
                <div className="flex justify-center gap-4">
                    {
                        medias.map((media) => (
                            <div key={media.text} className="hover:text-Teal-200 cursor-pointer border rounded-full size-7.5 p-0.5">
                                {media.icon}
                            </div>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}
