import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import axios from "axios";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function PrivateLayout() {
  const [authStatus, setAuthStatus] = useState("loading");

  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v0/users/profile")

      if (!response || response.status !== 200) {
        navigate("/login");
        setAuthStatus("unauthenticated");
        toast.error("Unauthorized access, please login", { position: "top-center" });
        return;
      }
      if (response.status == 200) {
        setAuthStatus("authenticated");
      }
    } catch (error) {
      toast.error("Unauthorized access, please login", { position: "top-center" });
      console.error("Error checking authentication:", error);
      setAuthStatus("unauthenticated");
      navigate("/login");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div>
      {authStatus === "loading" && (
        <div className="flex flex-col items-center gap-4">
          <Button disabled size="sm">
            <Spinner data-icon="inline-start" />
            Loading...
          </Button>
        </div>
      )}
      {authStatus === "authenticated" && <Outlet />}
      <Toaster />
    </div>
  );
}

export default PrivateLayout;
