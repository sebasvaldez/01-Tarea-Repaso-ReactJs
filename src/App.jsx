import "./styles/index.css";
import "./styles/features.css";

import { useState } from "react";

import { NavBar } from "./components/navigation/NavBar";
import { CustomBanner } from "./components/banners/CustomBanner";
import { Footer } from "./components/navigation/Footer";
import { CustomNewsSection } from "./components/sections/CustomNewsSection";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const onClickLogin = () => {
    setIsLogged(!isLogged);
  };

  return (
    <>
      <NavBar onClick={onClickLogin} isLoginUser={isLogged} />

      <CustomBanner />

      <CustomNewsSection isLoginUser={isLogged} />
      <Footer />
    </>
  );
};

export default App;
