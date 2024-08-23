import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import { ApiData } from "./api/dummyData";
import FootSection from "./components/Footer/Footer";
import { HeroSection } from "./components/Herosection/Herosection";
import { Card } from "./components/Card/Card";
import { Counter_main } from "./components/Counter/Counter";
import { useState  } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/Error/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));


const WappperSection = () => {
    return (
        <>
        <div className="mx-auto 2xl:container">
            <div className="w-[70%] mx-auto">
            <Header /> 
                <Outlet/>
            <FootSection />
            </div>
            </div>
        </>
    )
}

const Approuter = createBrowserRouter([
    {
        element:<WappperSection/>,
        path:"/",
        children:[
            {
                element:<HeroSection />,
                path:"/hero" 
            },
            {
                element: ApiData.map((x,index)=>{
                    return <Card key={index} name={x.name} age={x.age} />
                }
                ),
                path:"/card"
            },
            {
                element:<Counter_main />,
                path:"/counter"
            }
       

        ],
        errorElement: <ErrorPage />,
    }
])



root.render(<RouterProvider router={Approuter} />);

