import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";
import "./globals.css";

export default function App() {
  return (
    <div className="grid w-full max-w-[1440px] grid-cols-[auto,1fr] bg-[#1f1d2b] text-white">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Navbar />
        <Maincontent />
      </div>
    </div>
  );
}
