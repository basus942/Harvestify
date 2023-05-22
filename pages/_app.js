import { Footer } from "@/components/Footer";
import Navabar from "@/components/Navbar";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navabar />
      <div class="flex flex-col h-screen justify-between">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
