import { UserContextProvider } from "../context/userContext";
import "../style/index.css";
import GlobalStyle from '../style/global'

export default function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </UserContextProvider>
  );
}
