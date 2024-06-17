import { createBrowserRouter } from "react-router-dom";
import Logs from "./Logs";
import Details from "./Details";
import NoteTaking from "./NoteTaking";
import Venture from "./Venture";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Venture/>
    },
    {
        path: '/DailyLogs',
        element: <Logs/>
    },
    {
        path: '/Details/:id',
        element: <Details/>
    },
    {
        path: '/Jotting',
        element: <NoteTaking/>
    }
])

export default router;