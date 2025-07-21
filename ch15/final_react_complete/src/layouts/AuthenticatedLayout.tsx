import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";
import { useEffect, useState } from "react";

export default function AuthenticatedLayout() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!user) {
      navigate("/auth");
    } else {
      setShow(true);
    }
  }, [navigate, user]);
  return <>{show && <Outlet />}</>;
}
