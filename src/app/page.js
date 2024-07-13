import Image from "next/image";
import classNames from "classnames";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-[100%] flex-col items-center space-y-6 pt-10 px-18">
      <Image
        src="/images/sycamore-tree.jpg"
        width={400}
        height={600}
        alt="tree"
      />
      <p class={classNames("text-md w-full text-center px-18")}>
        No need to miss out on all our awesome food and your favorite bottle or
        can of beer/cider! <br></br>Come on in to order take out or call your
        order in at 415.252.7704
      </p>

      {/* MENUS */}
      <div
        class={classNames("flex flex-row space-x-4 text-lg justify-between")}
      >
        <p>Food</p> <p>Brunch</p> <p>Beer</p>
      </div>
      <div className={classNames("flex flex-col items-center")}>
        <p>Daily Happy Hour with dollar off drafts 4-7PM</p>
        <p>Weekend Brunch: Saturday-Sunday 10AM-3PM</p>
      </div>
      <div className={classNames("flex flex-col items-center")}>
        <p>info@thesycamoresf.com</p>
        <p>Free WiFi</p> <p>Call us to make a reservation</p>
      </div>
      <Footer />
    </main>
  );
}
