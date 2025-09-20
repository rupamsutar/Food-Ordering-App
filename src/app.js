import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: '/contact',
            element: <Contact />
        }
    ]
)
 
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);