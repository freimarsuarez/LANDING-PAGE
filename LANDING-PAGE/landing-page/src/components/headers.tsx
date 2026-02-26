import { Navbar } from "./navbar"

export const Headers = () => {
    return (
        <header className="flex justify-between">
            <a href="/" >
                <img src="/images/logo.svg" alt="logo" className="w-20" />
            </a>
            <Navbar />
        </header>
    )
}
