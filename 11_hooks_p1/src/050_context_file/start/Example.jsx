import "./Example.css";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Example = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default Example;
