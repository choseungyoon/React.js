// blueprint
import NavBar from "../components/NavBar"
import style from "../styles/globals.css"


export default function App({Component,pageProps}) {
    return (
        <div> 
        <NavBar></NavBar>
        <Component {...pageProps} />
        <style jsx global>{`
        a {
            color : white
        }
        `}
        </style>
        </div>
    );
}