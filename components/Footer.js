import classNames from "classnames";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";

export default function Footer() {
  return (
    <div
      className={classNames(
        "bg-orange-900 text-orange-100 py-6 px-2 w-full bottom-0 flex flex-col items-center space-y-6 mt-[800px]"
      )}
    >
      <div className="text-center text-orange-950 text-xs">
        <p className="mb-4">2140 Mission St, San Francisco, CA 94110</p>
        <p>Call for reservations (415) 252-7704</p>
        <p>info@thesycamoresf.com</p>
      </div>
      <div className={classNames("flex flex-row space-x-2")}>
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}
