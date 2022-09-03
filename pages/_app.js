import '../styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import {Amplify} from "aws-amplify"

Amplify.configure({ssr:true})


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
