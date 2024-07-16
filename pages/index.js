import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

export default function Home() {
  return (
    <div className="text-center text-orange-950 text-sm flex flex-col items-center justify-center space-y-6">
      <div
        className={classNames(
          "flex flex-col items-center space-y-3 p-2",
          "md:flex-row md:space-y-0 md:space-x-4"
        )}
      >
        <Image
          src="/images/syc-logo.png"
          height={100}
          width={300}
          alt="outside the bar"
        />
        <p
          className={classNames("text-xl px-3", "md:text-4xl md:max-w-[500px]")}
        >
          Come on in and enjoy our awesome food and selection of wine, beer, and
          ciders!
        </p>
      </div>

      <div className={classNames("text-center flex flex-col")}>
        <p>Hours:</p>
        <p>Monday to Friday: Noon - Midnight (or later)</p>
        <p>Saturday & Sunday Brunch: 10am - Midnight (or later)</p>
      </div>

      {/* <Link href="/food-menu">
          <p className={classNames("text-lg hover:text-orange-400")}>food</p>
          </Link>
          <Link href="/brunch-menu">
          <p className={classNames("text-lg hover:text-orange-400")}>brunch</p>
          </Link>
          <Link href="/beer-menu">
          <p className={classNames("text-lg hover:text-orange-400")}>beer</p>
          </Link> */}
    </div>
  );
}
