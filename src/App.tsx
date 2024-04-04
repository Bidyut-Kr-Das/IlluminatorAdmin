import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Toaster richColors position="bottom-right" />
        <Nav />
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
