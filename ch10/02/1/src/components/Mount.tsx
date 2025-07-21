import { useEffect } from "react";

export default function Mount() {
  useEffect(() => {
    console.log("Mounted");
  }, []);
  return <div>Mount</div>;
}
