import Layout from "@/components/Layout/Layout";
import Context from "../context/Context";

import "@/styles/globals.css";
import { ProtectedRoute } from "@/context/ProtectedRoute";

export default function App({ Component, pageProps }) {
  // fix navarbar(hamburger)
  // reposnsive contact us
  return (
    <>
      <div data-theme="forest">
        <ProtectedRoute>
          <Context>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Context>
        </ProtectedRoute>
      </div>
    </>
  );
}
