import HomePage from "./pages/homePage/HomePage";
import Layout from "./pages/layout/layout";
import ListPage from "./pages/listPage/listPage";
import ProfilePage from "./pages/profilePage/ProfilePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./pages/singlePage/SinglePage";
import Contact from "./pages/contact/contact";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ path: "/", element: <HomePage /> },
				{ path: "/list", element: <ListPage /> },
				{ path: "/:id", element: <SinglePage /> },
				{ path: "/profile", element: <ProfilePage /> },
				{ path: "/contact", element: <Contact /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
