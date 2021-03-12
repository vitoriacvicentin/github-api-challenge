import { ItemsContextProvider } from "../context/ItemsContext";
import "../style/index.css";
import GlobalStyle from '../style/global'

export default function MyApp({ Component, pageProps }) {
  return (
    <ItemsContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ItemsContextProvider>
  );
}
