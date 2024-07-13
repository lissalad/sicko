import classNames from "classnames";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className={classNames(
        "p-4 text-orange-100 w-full bg-orange-600/80 flex flex-col items-center text-sm py-8"
      )}
    >
      <p>
        <a href="https://www.google.com/maps/place/2140+Mission+St,+San+Francisco,+CA+94110/@37.7627738,-122.4223203,16z/data=!3m1!4b1!4m6!3m5!1s0x808f7fc75fb3adaf:0xb971ccdda7c5312d!8m2!3d37.7627696!4d-122.41974!16s%2Fg%2F11ks1mp0ds?entry=ttu">
          2140 Mission, San Francisco, CA 94110
        </a>
      </p>
      <p>info@thesycamoresf.com | 415-252-7704</p>
      <p>
        Open M-F: Noon-Midnight or Later | Brunch Sat-Sun 10am-Midnight or Later
      </p>
      {/* <p>Happy Hour: 4-7PM</p> */}
      {/* <p>Call 415-252-7704 to make a reservation</p> */}
      <p>Facebook | Instagram</p>
    </div>
  );
}
