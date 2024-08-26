import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import { ApiData } from "./api/dummyData";
import FootSection from "./components/Footer/Footer";
import { HeroSection } from "./components/Herosection/Herosection";
import { Counter_main } from "./components/Counter/Counter";
import { Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/Error/Error";
import { Body } from "./components/Body/Body";



const root = ReactDOM.createRoot(document.getElementById("root"));


const WrapperSection = () => {
    return (
        <div className="mx-auto 2xl:container">
            <div className="w-[70%] mx-auto">
                <Header />
                <Outlet />
                {/* <FootSection /> */}
            </div>
        </div>
    );
};



const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <WrapperSection />,
        children: [
            {
                path: "/",
                element: (
                 
                        <Body/>
         
                ),
            },
           
        ],
        errorElement: <ErrorPage />,
    },
]);

root.render(<RouterProvider router={AppRouter} />);
