import React from "react";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/partials/NavBar";
import Footer from "./components/partials/Footer";
import { UserProvider } from "./pages/auth/UserContext"; // Importa el UserProvider

function App() {
  return (
    <>
      <UserProvider> {/* Envuelve tu aplicación con el UserProvider */}
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <div style={{ flex: 1 }}>
            <NavBar />
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </UserProvider>
    </>
  );
}

export default App;
