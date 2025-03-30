import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";
import "./globals.css";

export default function App() {
  return (
    <div className="grid w-full" style={{ gridTemplateColumns: "auto 1fr" }}>
      <Sidebar />
      <div className="flex w-full flex-col">
        <Navbar />
        <Maincontent />
      </div>
    </div>
  );
}
