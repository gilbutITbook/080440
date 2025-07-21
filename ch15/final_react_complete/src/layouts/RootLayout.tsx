import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
