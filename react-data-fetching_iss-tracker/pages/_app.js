import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

async function fetcher(URL) {
  // das ist ein Argument (URL)
  const response = await fetch(URL);

  //check ob es einen Error ist
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    console.log(error);
    //
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
}
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher, refreshInterval: 2000 }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
