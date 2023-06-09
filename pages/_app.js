import Layout from "@/components/Layout/Layout";
import Context from "../context/Context";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import { ProtectedRoute } from "@/context/ProtectedRoute";

export default function App({ Component, pageProps }) {
  // fix navarbar(hamburger)
  // reposnsive contact us
  return (
    <>
      <ProtectedRoute>
        <Context>
          <Layout>
            <Component {...pageProps} />
            <Analytics />
          </Layout>
        </Context>
      </ProtectedRoute>
    </>
  );
}
