import React from "react";
import { BackToTop, Footer, Header } from "./components";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      {/* Return to top button */}
      <BackToTop />

      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
