import { Inter } from "next/font/google";
import Dropdown from './dropdown';
const inter = Inter({ subsets: ["latin"] });

export default function ServicesDropdown() {
  return (
    <main className={`${inter.className}`}>
      <div className="flex flex-row bg-black text-gray-50 justify-between p-5">
        <div><h1 className="text-3xl font-bubble">USAM Technology</h1></div>
        <div>
          <ul className="flex flex-row space-x-4 text-lg">
            <li className="cursor-pointer hover:text-gray-700">Home</li>
            <li className="cursor-pointer hover:text-gray-700"><Dropdown /></li>
            <li className="cursor-pointer hover:text-gray-700">Testimonials</li>
            <li className="cursor-pointer hover:text-gray-700">About</li>
            <li className="cursor-pointer hover:text-gray-700">Contact</li>
          </ul>
        </div>
      </div>
    </main>
  );
}



