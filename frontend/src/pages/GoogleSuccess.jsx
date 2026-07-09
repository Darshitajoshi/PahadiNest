import { useEffect } from "react";

function GoogleSuccess() {
  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (token) {
      localStorage.setItem("token", token);

      // Reload app completely
      window.location.replace("/dashboard");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-2xl font-semibold">
        Signing you in...
      </h2>
    </div>
  );
}

export default GoogleSuccess;