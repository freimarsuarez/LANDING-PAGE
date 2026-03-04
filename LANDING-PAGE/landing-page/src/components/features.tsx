import { features } from "../common/constants"


export const Features = () => {
    return (
        <div className="grid grid-cols-1 gap-20 mt-35 md:grid-cols-2">
            {
                features.map(({ title, description, iconUrl }) => (
                    <div key={title} className=" flex flex-col items-center text-center">
                        <img src={iconUrl} alt={title} />
                        <div>
                            <h3 className="font-bold mb-2 mt-8">{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
