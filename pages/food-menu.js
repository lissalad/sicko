import Image from "next/image";
import classNames from "classnames";

export default function FoodMenu() {
  const menuStyles = "md:max-w-[800px] w-full";
  return (
    <div className="text-center text-orange-950 flex flex-row items-center justify-center">
      <img className={menuStyles} src="/images/food.png" alt="food menu" />
    </div>
  );
}
