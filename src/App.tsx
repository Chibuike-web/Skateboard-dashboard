import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./globals.css";
import { Dashboard } from "./pages/Dashboard";
import Discover from "./pages/Discover";
import Trending from "./pages/Trending";
import Streaming from "./pages/Streaming";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route index element={<Discover />} />
					<Route path="trending" element={<Trending />} />
					<Route path="streaming" element={<Streaming />} />
				</Route>
			</Routes>
		</Router>
	);
}
