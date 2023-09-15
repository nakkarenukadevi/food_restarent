import { useEffect, useState } from "react";
import Menu_API from "./constants.js";

const useRestrentMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(Menu_API + id);
    console.log(Menu_API);

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  return resInfo;
};
export default useRestrentMenu;
