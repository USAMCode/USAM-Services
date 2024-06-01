import "@/styles/globals.css";
// import header from ""

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Component {...pageProps} />
    </div>
  )
}
