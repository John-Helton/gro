import React from "react";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/partials/NavBar";
import Footer from "./components/partials/Footer";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <NavBar />
        <AppRoutes/>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
