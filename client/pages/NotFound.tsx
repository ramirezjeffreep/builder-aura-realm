import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Placeholder from "@/components/Placeholder";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Placeholder
      title="Page not found"
      description="This page doesn’t exist yet. Use the navigation to continue."
    />
  );
};

export default NotFound;
