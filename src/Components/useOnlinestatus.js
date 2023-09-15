import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [OnLineStatus, setOnlinestatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlinestatus(false);
    });
    window.addEventListener("online", () => {
      setOnlinestatus(true);
    });
  }, []);
  return OnLineStatus;
};
export default useOnlineStatus;
