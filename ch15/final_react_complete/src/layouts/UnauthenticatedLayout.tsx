import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

export default function UnauthenticatedLayout() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      setShow(true);
    }
  }, [navigate, user]);
  return <>{show && <Outlet />}</>;
}
