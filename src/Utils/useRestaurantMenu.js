import { useEffect, useState } from "react";
import { MENU_API } from "../Utils/Constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = async () => {
    const data = await fetch(
      "https://gh-food-delivery.vercel.app/" +
        MENU_API +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
