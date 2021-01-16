import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import DarkTheme from "../styles/theme/impl/DarkTheme";
import LightTheme from "../styles/theme/impl/LightTheme";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeToggleContext } from "../components/context/ThemeToggleContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Head>
        <script
          async
          defer
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
        <noscript>
          <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" />
        </noscript>
      </Head>
      <Wrapper>
        <ContentContainer>
          <ThemeToggleContext.Provider value={{ theme, setTheme }}>
            <AppWrapper Component={Component} pageProps={pageProps} />
          </ThemeToggleContext.Provider>
        </ContentContainer>
      </Wrapper>
    </>
  );
}

function AppWrapper({ Component, pageProps }) {
  const themeToggleContext = useContext(ThemeToggleContext);

  const getTheme = () => {
    return themeToggleContext.theme === "light" ? LightTheme : DarkTheme;
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1000px;
`;
