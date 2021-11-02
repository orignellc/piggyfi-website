import Link from "next/link";
import Image from "next/image";
import { ModalEmailSubscribe, toggleEmailSubscribe } from "../Modals";

export function Footer() {
  return (
    <div>
      <div className="py-14 md:py-20 bg-black">
        <div className="max-w-6xl px-4 w-full mx-auto rounded-2xl px-9 py-16">
          <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-10">
            <div className="sm:col-span-3 md:col-span-2">
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo_large.png"
                    className="mb-7"
                    width="144"
                    height="50"
                    alt="logo"
                  />
                </a>
              </Link>
              <p className="text-white text-opacity-50 font-light text-lg md:text-xl">
                A DeFi platform that helps you save in stable currencies
              </p>
            </div>

            <div className="grid grid-rows-4 gap-8 text-white text-lg md:text-xl font-sm">
              <Link href="/#features">
                <a className="mr-8 hover:text-purple">Features</a>
              </Link>
              <Link href="/#how-it-works">
                <a className="mr-8 hover:text-purple">How It works</a>
              </Link>
              <Link href="/#case-study">
                <a className="mr-8 hover:text-purple">Case study</a>
              </Link>
              <Link href="/#faqs">
                <a className="mr-8 hover:text-purple">FAQs</a>
              </Link>
            </div>

            <div className="text-white sm:col-span-2">
              <h3 className="text-2xl font-medium mb-4">
                Subscribe to our newsletter
              </h3>

              <p className="font-light text-lg md:text-xl mb-4">
                Subscribe to our newsletter to get PiggyFi update.
              </p>

              <div
                className="p-1 md:p-2 bg-white rounded-2xl flex"
                onClick={toggleEmailSubscribe}
              >
                {/*<input type="text" className="w-full mx-2 p-2 text-black" />*/}
                <button className="p-2 md:p-2.5 ml-auto text-white text-sm md:text-xl btn-bg-gradient-purple rounded-lg md:rounded-2xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl px-4 w-full mx-auto px-9 py-5 border-t border-gray-500 text-center">
          <p className="font-light text-lg md:text-xl text-white ">
            PiggyFi, Copyright © 2021. All Rights Reserved
          </p>
        </div>
      </div>
      <ModalEmailSubscribe />
    </div>
  );
}
