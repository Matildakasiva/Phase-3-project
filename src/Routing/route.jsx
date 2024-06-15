import { createBrowserRouter } from "react-router-dom";
import Logs from "./Logs";
import Details from "./Details";
import NoteTaking from "./NoteTaking";
import VentureLog from "./VentureLog";


const router = createBrowserRouter([
    {
        path: '/',
        element: <VentureLog/>
    },
    {
        path: '/DailyLogs',
        element: <Logs/>
    },
    {
        path: '/Details',
        element: <Details/>
    },
    {
        path: '/Jotting',
        element: <NoteTaking/>
    }
])

export default router;