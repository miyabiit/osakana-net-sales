import { SalesToday } from "../components/pages/home/SalesToday";
import { SalesUpdate } from "../components/pages/home/SalesUpdate";
import { Setting } from "../components/pages/home/Setting";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
	{
		path: "/",
		exact: true,
		children: <SalesToday />
	},
	{
		path: "/update",
		exact: false,
		children: <SalesUpdate />
	},
	{
		path: "/setting",
		exact: false,
		children: <Setting />
	},
	{
		path: "*",
		exact: false,
		children: <Page404 />
	}
];


