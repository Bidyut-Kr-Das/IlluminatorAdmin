import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Toaster richColors position="bottom-right" />
        <Nav />
        <Routes>
          <Route path={`/`} element={<LoginPage />} />
          <Route path={`/login`} element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
