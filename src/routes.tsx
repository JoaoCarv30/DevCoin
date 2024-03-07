import { createBrowserRouter } from "react-router-dom"; 

import { Home } from "./pages/home";
import { Description } from "./pages/description";
import { NotFound } from "./pages/notFound";


const router = createBrowserRouter([


    {
        path: "/",
        element: <Home />
    },
    {
        path: "/description",
        element: <Description />
    },
    {
        path: "*",
        element: <NotFound />
    }
    
]);

export {router};