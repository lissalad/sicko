import classNames from "classnames";
import Image from "next/image";

export default function Sister() {
  return (
    <a
      href="https://thewillowssf.com/"
      className={classNames("flex flex-col items-center")}
    >
      <div
        className={classNames(
          "bg-orange-200/90 p-4 space-y-2 rounded-l-xl text-black fixed top-4 right-0 hover:pl-5 hover:py-5 transition-all"
        )}
      >
        <p>Visit our sister restaurant!</p>
        <Image
          src="/images/the_willows.jpg"
          width={270}
          height={100}
          alt="the willows"
        ></Image>
      </div>
    </a>
  );
}
