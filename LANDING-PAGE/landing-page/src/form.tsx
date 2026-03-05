import React, { useState } from "react";
import { Button } from "./components"

export const Form = () => {

    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        const isValid = regExp.test(inputValue);
        if (isValid) {
            console.log("CORREO ENVIADO")
            setError(false)
        } else {
            setError(true)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setInputValue(value)
    }

    return (
        <div className="mb-75 absolute -top-50 left-0 right-0 text-center py-10 px-7 bg-Navy-850 rounded-[9px] w-86 mx-auto md:w-120 xl:w-182.5">
            <h2 className="font-bold mb-4 text-[1.25rem]">Get early access today</h2>
            <p className="text-sm mb-8">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 xl:flex-row" action="">
                <input
                    onChange={handleChange}
                    className="bg-white rounded-3xl placeholder:text-gray-400 text-Navy-800 text-center h-12 xl:flex-1"
                    placeholder="email.example.com"
                    required
                    type="email"
                    value={inputValue}
                />
                {
                    error && (<p className="text-red-500 text-sm -mt-3.75">Please provide an valid Email</p>)
                }
                <Button styles=" xl:w-[200px]" text="Get Started For Free" />
            </form>
        </div>
    )
}
