import ReactDOM from "react-dom";
import "./index.css";


const para1 = <p className="bg-red-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt id voluptatum ullam aspernatur saepe aliquam neque dolore. Molestiae aspernatur placeat non provident explicabo quae unde ipsam distinctio veritatis totam.</p>

const root = ReactDOM.createRoot(document.getElementById("root"));


const Header = () => {
    return (
        <>
            <div className="flex justify-center">
                <h1 className="text-2xl text-red-200">
                    heading
                </h1>
            </div>
        </>
    )
}

const HeroSection = () => {
    return (
        <>
            <div>
                <p className="text-green">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque eveniet mollitia tempora doloremque in, incidunt minus earum unde ipsa deleniti veritatis, inventore ratione, minima commodi tenetur laudantium. Saepe, aperiam.
                </p>
            </div>
        </>
    )
}

const FootSection = () => {
    return (
        <>
            <div>
                <p className="text-lg">Footer Section</p>
            </div>
        </>
    )
}

const RappperSection = () => {
    return (
        <>
        <div className="2xl:container mx-auto">
            <div className="w-[70%] mx-auto">
            <Header /> 
            <HeroSection /> 
            <FootSection />
            </div>
            </div>
        </>
    )
}

root.render(<RappperSection/>);

