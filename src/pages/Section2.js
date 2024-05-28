import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Section2() {
  return (
    <main className={`${inter.className}`}>
      <div className="flex flex-col lg:flex-row h-screen p-[195px] bg-stone-200">

        <div className="flex flex-col justify-center px-[130px] lg:px-[250] bg-stone-200">
          <h2 className="text-2xl lg:text-2xl text-orange-400 mb-4">ABOUT US</h2>
          <h1 className="text-2xl lg:text-4xl font-bold mb-6">We Turn Ideas Into Reality</h1>
          <p className="text-base lg:text-lg font-medium mb-4">
            We apply innovative design solutions to enhance people’s residential well-being and to help workplaces succeed & achieve more in comfortable environments!
          </p>
          <p className="text-sm lg:text-base font-light mb-8">
            Our team collaborates with clients across all our offices located throughout the US. Our mission is to implement outstanding design ideas and solutions for any project we’re working on, carefully considering client guidelines, technical possibilities, and environmental issues.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center py-8 px-9 lg:px-12 lg:py-12 bg-stone-30 border-l border-slate-900 text-center">
          <h1 className="text-5xl lg:text-6xl text-orange-800 font-bold mb-4">33</h1>
          <h3 className="text-lg lg:text-xl font-semibold mb-4">YEARS</h3>
          <h5 className="text-xs lg:text-sm font-light">OF SUCCESSFUL WORK IN THE MARKET</h5>
        </div>
        
      </div>
    </main>
  );
}
