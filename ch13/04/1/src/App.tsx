import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import Settings from "./pages/Settings";
import RootLayout from "./layouts/RootLayout";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team/*" element={<Team />} />
        <Route path="my">
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Summary />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
