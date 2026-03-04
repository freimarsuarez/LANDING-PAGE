import { Button } from "./components"

export const Form = () => {
    return (
        <div className="mb-75 absolute -top-50 left-0 right-0 text-center py-10 px-7 bg-Navy-850 rounded-[9px] w-86 mx-auto md:w-120">
            <h2 className="font-bold mb-4 text-[1.25rem]">Get early access today</h2>
            <p className="text-sm mb-8">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <form className="flex flex-col gap-6" action="">
                <input
                    className="bg-white rounded-3xl placeholder:text-gray-400 text-center h-12"
                    placeholder="email.example.com"
                    type="email"
                />
                <Button text="Get Started For Free" />
            </form>
        </div>
    )
}
