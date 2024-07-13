import classNames from "classnames";

export default function Footer() {
  return (
    <div
      className={classNames(
        "p-4 text-orange-100 w-full bg-orange-600/80 flex flex-col items-center text-sm py-8"
      )}
    >
      <p>2140 Mission, San Francisco, CA 94110 (map)</p>
      <p>info@thesycamoresf.com | 415-252-7704</p>
      <p>
        Open M-F: Noon-Midnight or Later | Brunch Sat-Sun 10am-Midnight or Later
      </p>
      <p>Happy Hour: 4-7PM</p>
      <p>Call us to make a reservation</p>
      <p>Social: Facebook | Instagram</p>
      <p>Visit our sister restaurant The Willows</p>
    </div>
  );
}
