import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import { ApiData } from "./api/dummyData";
import FootSection from "./components/Footer/Footer";
import { HeroSection } from "./components/Herosection/Herosection";
import { Card } from "./components/Card/Card";
import { Counter_main } from "./components/Counter/Counter";
import { Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/Error/Error";
import { lazy } from "react";




const root = ReactDOM.createRoot(document.getElementById("root"));


const WrapperSection = () => {
    return (
        <div className="mx-auto 2xl:container">
            <div className="w-[70%] mx-auto">
                <Header />
                <Outlet />
                <FootSection />
            </div>
        </div>
    );
};


const CardPage = () => {
    return (
        <div>
            {ApiData.map((x, index) => (
                <Card key={index} name={x.name} age={x.age} />
            ))}
        </div>
    );
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <WrapperSection />,
        children: [
            {
                path: "/form",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <FormComponent />
                    </Suspense>
                ),
            },
            {
                path: "/hero",
                element: <HeroSection />,
            },
            {
                path: "/card",
                element: <CardPage />,
            },
            {
                path: "/counter",
                element: <Counter_main />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

root.render(<RouterProvider router={AppRouter} />);
