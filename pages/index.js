import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

export default function Home() {
  return (
    <div className="">
      <div
        classNames={classNames(
          "flex flex-col items-center text-center",
          "md:flex md:flex-row"
        )}
      >
        <div
          class={classNames(
            "h-[440px] overflow-hidden relative",
            "md:h-[550px]"
          )}
        >
          <img
            src="/images/tap-handles.jpg"
            alt="Description of the image"
            class="w-full h-full object-cover object-right"
          />
        </div>

        {/* <div
          className={classNames("flex flex-col items-center", "md:flex-row")}
        >
          <p
            className={classNames(
              "text-2xl text-orange-900 text-center",
              "md:text-4xl md:mx-12 md:max-w-[700px] md:text-left md:mt-10"
            )}
          >
            Come on in and enjoy our awesome food and selection of wine, beer,
            and ciders!
          </p>
          <div
            className={classNames(
              "text-center flex flex-col text-orange-900 text-sm mt-8 border-2 py-5 px-4 border-orange-700 m-1 bg-orange-200/20 w-fit space-y-3",
              ""
            )}
          >
            <p className="font-semibold mb-2">Hours</p>
            <div>
              <p>Monday to Friday</p>
              <p> 12pm - Midnight (or later)</p>
            </div>
            <div>
              <p>Weekend Brunch: 10am </p>
              <p>Midnight (or later)</p>
            </div>
          </div>
        </div> */}
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
