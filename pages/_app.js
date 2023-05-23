import Layout from "@/components/Layout/Layout";
import Context from "../context/Context";

import "@/styles/globals.css";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div data-theme="luxury">
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
