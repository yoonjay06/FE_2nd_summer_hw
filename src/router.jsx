import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Layout from "./layouts/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <MainPage /> },
            { path: ':postId', element: <DetailPage /> },
        ],
    },
]);
export default router;