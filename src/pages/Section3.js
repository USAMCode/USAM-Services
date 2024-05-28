import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Section3() {
  return (
    <main className={`${inter.className}`}>
      <section>
        <div className="bg-neutral-800 h-screen justify-center items-center text-center p-8 ">
          <div><h1 className="text-3xl text-gray-300">Our Services</h1></div>
          <div className="flex flex-col md:flex-row md:justify-between text-lg text-gray-300 space-y-8 md:space-y-0 md:space-x-8 p-28">
            <div className="flex-1">
              <img src="/images/25625375_7122676.jpg" alt="Picture of the author" className="object-cover bg-fixed rounded-full" />
              <h3 className="font-semibold ">Automation</h3>
              <p className="font-light">Unlock innovation and creativity and achieve outcomes faster with automation.</p>
            </div>
            <div className="flex-1">
              <img src="/images/consulting.jpg" alt="Picture of the author" className="object-cover bg-fixed rounded-full" />
              <h3 className="font-semibold">Consulting</h3>
              <p className="font-light">Guiding Your Project Towards Success: Expert Consulting Every Step of the Way.</p>
            </div>
            <div className="flex-1">
              <img src="/images/data.png" alt="Picture of the author" className="object-cover bg-fixed rounded-full" />
              <h3 className="font-semibold">Data & Insights</h3>
              <p className="font-light">The right people get the right information at the right time with connected data.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
