import { useEffect } from "react";

export default function UnMount() {
  useEffect(() => {
    return () => {
      console.log("Unmounted");
    };
  }, []);
  return <div>UnMount</div>;
}
