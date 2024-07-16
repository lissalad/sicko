import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full sticky z-50 top-0 bg-orange-100/70 flex flex-row justify-between px-4 py-4 border-b border-gray-50/[0.08] backdrop-blur-lg text-gray-50 items-center">
      <Link href="/">
        <Image
          src="/images/the-sycamore.png"
          width={150}
          height={200}
          alt="sycamore logo"
          className={classNames("md:w-[240px]")}
        ></Image>
      </Link>
    </header>
  );
}
