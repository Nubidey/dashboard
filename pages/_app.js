import "../styles/globals.css";
import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    
      <Layout>
  
      <Component {...pageProps} />
     
    </Layout>
  


  );
}

export default MyApp;


