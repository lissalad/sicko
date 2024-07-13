import classNames from "classnames";
import Image from "next/image";

export default function Header() {
  return (
    <div
      className={classNames(
        "bg-orange-300/90 backdrop-blur-md w-full fixed top-0 p-4"
      )}
    >
      <Image
        src="/images/sycamore-tree.jpg"
        width={200}
        height={200}
        alt="tree"
      />
    </div>
  );
}
