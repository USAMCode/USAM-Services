import "@/styles/globals.css";
import FloatingSocialMediaBar from "@/components/FloatingSocialBar";

export default function App({ Component, pageProps }) {
  return (
    <div className="App w-screen overflow-y-hidden overflow-x-hidden">
      <Component {...pageProps} />
      <FloatingSocialMediaBar />
    </div>
  )
}
