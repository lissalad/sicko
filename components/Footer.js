import classNames from "classnames";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";

export default function Footer() {
  return (
    <div
      className={classNames(
        "bg-orange-700 text-orange-200 py-4 px-2 w-full bottom-0 flex flex-col items-center space-y-4"
      )}
    >
      <div className="text-center text-orange-950 text-xs">
        <p>2140 Mission St, San Francisco, CA 94110</p>
        <p>Call for reservations (415) 252-7704</p>
        <p>Email us! info@thesycamoresf.com</p>
      </div>
      <div className={classNames("flex flex-row space-x-2")}>
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}
