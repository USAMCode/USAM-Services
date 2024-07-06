import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="App w-screen overflow-y-hidden overflow-x-hidden">
      <Component {...pageProps} />
    </div>
  )
}
