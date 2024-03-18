import HomePage from "./pages/homePage/HomePage";
import Layout from "./pages/layout/layout";
import ListPage from "./pages/listPage/listPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./pages/singlePage/SinglePage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ path: "/", element: <HomePage /> },
				{ path: "/list", element: <ListPage /> },
				{ path: "/:id", element: <SinglePage /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
