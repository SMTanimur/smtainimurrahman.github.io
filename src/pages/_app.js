import Layout from "@components/Layout";
import "../../styles/globals.css";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <div className="bg-[#1E222F] h-full w-full">
    <Layout>
          <Component {...pageProps} />
     </Layout>
    </div>
    </QueryClientProvider>
    </>
  )
}

export default MyApp;
