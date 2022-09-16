// blueprint
import Layout from "../components/Layout";
import NavBar from "../components/NavBar"
import style from "../styles/globals.css"


export default function App({Component,pageProps}) {
    return (
        <Layout>
        <Component {...pageProps} />
        </Layout>
    );
}