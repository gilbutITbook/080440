import Auth from "./components/Auth";
import Count from "./components/Count";
import CountOutsideDisplay from "./components/CountOutsideDisplay";
import AuthProvider from "./providers/AuthProvider";
import CountProvider from "./providers/CountProvider";

export default function App() {
  console.log("App rendering");
  return (
    <>
      <AuthProvider>
        <CountProvider>
          <Count />
          <Auth />
        </CountProvider>
        <CountOutsideDisplay />
      </AuthProvider>
    </>
  );
}
