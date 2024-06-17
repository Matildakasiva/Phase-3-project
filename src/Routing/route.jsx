import { createBrowserRouter } from "react-router-dom";
import Logs from "./Logs";
import Details from "./Details";
import Calendar from "../Components/Calender";
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
        path: '/Plan',
        element: <Calendar/>
    }
])

export default router;