import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";
import Dashboard from "./pages/Dashboard";
import AddProductSection from "./pages/sections/AddProductSection";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Toaster richColors position="bottom-right" />
        <Nav />
        <Routes>
          <Route path={`/`} element={<LoginPage />} />
          <Route path={`/login`} element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="addProduct" element={<AddProductSection />} />
          </Route>
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
