import { Telegram, Medium, Twitter, Plus } from "../Icons";
import { useState } from "react";

let show, setShow;

export function DashboardFAQ() {
  [show, setShow] = useState(null);

  return (
    <div className="relative" id="faqs">
      <div className="py-14 md:py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-medium text-white">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        <div className="max-w-6xl px-4 w-full mx-auto rounded-2xl px-9 py-5">
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, key) => (
              <div
                key={key}
                className="rounded-3xl bg-purple-deep bg-opacity-20 p-9"
                style={{
                  boxShadow: "0px 18.6667px 46.6667px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="">
                  <div className="flex items-center mb-3">
                    <span
                      className="cursor-pointer"
                      onClick={() => toggleFaq(key)}
                    >
                      <Plus width="24" height={24} />
                    </span>
                    <h3
                      className="text-white text-xl md:text-2xl font-medium ml-2 cursor-pointer"
                      onClick={() => toggleFaq(key)}
                    >
                      {faq.heading}
                    </h3>
                  </div>
                  {isShowing(key) ? (
                    <p className="text-white text-opacity-80 font-light text-lg">
                      {faq.body}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl px-4 mx-auto my-16 text-white text-center text-xl md:text-3xl">
            Do you still have more questions?
            <br />
            Join Our community or send us an
            <a
              href="mailto:#"
              className="text-blue-600 hover:text-indigo-800 focus:bg-indigo-700"
            >
              &nbsp;Email
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-16">
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-medium mb-4">
                Join our community
              </h2>
              <p className="text-xl font-light">
                Learn more about PiggyFi, engage and chat with others in the
                community
              </p>
            </div>
            <div className="flex justify-center md:justify-end items-center">
              <Twitter className="h-16 md:h-24 w-16 md:w-24 mr-10 md:mr-14" />
              <Telegram className="h-16 md:h-24 w-16 md:w-24 mr-10 md:mr-14" />
              <Medium className="h-16 md:h-24 w-16 md:w-24" />
            </div>
          </div>

          <div className="max-w-6xl px-4 w-full mx-auto bg-purple-deep rounded-2xl px-9 pt-5 md:pt-16">
            <div className="max-w-3xl w-full mx-auto text-xl md:text-2xl text-white leading-normal md:flex justify-between items-center">
              <div className="text-white text-center md:text-left md:pr-5">
                <h2 className="text-3xl md:text-4xl font-medium mb-4">
                  Download PiggyFi
                </h2>
                <p className="text-xl font-light">
                  PiggyFi is a convenient way to save money in stable currencies
                  and guard your money against inflation
                </p>

                <button className="text-white py-5 px-11 mt-5 mb-12 rounded-2xl btn-bg-gradient-purple">
                  Coming Soon
                </button>
              </div>

              <div className="md:pl-5 w-1/2 md:w-full mx-auto">
                <img src="/images/piggyfi-app.png" alt="PiggyFi App" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    heading: "What is PiggyFi?",
    body: "A Defi savings platform without the need of an ethereum client such as Metamask, that allows anyone to save in a stable currency such as the US Dollars, by leveraging on stable cryptocurrencies such as BUSD and generating interest on savings by staking in lending protocols.",
  },
  {
    heading: "Does PiggyFi work with any traditional Financial Institution?",
    body: "No, PiggyFi is built on the blockchain and therefore is decentralized. It allows liquidity on the platform with the use of an automated P2P system.",
  },
  {
    heading: "What problem does PiggyFi solves?",
    body: "Sub-Saharan Africa has one of the highest inflation rates in the world. Individuals and Families saving money in their local currency do not have an easy way to guard their life savings against devaluation. PiggyFi is out to solve Inflation problem in Sub-Saharan Africa",
  },
  {
    heading: "How does PiggyFi benefit from building on Xend Finance SDK?",
    body: "All transactions performed on PiggyFi are carried out directly on the blockchain and each transaction costs a fee. By building on Harmony, we are able to save a lot on transaction cost due to the low transaction fee on the Harmony network",
  },
  {
    heading: "How do you convert my funds to USD using blockchain?",
    body: "By using an automated P2P system, you can convert your local currency into BUSD, a stable currency on the blockchain, which is an equivalent of the US Dollar and vice versa.",
  },
  {
    heading: "How does PiggyFi benefit from building on Harmony?",
    body: "All transactions performed on PiggyFi are carried out directly on the blockchain and each transaction costs a fee. By building on Harmony, we are able to save a lot on transaction cost due to the low transaction fee on the Harmony network",
  },
  {
    heading: "How secure is PiggyFi?",
    body: "All funds deposited on the PiggyFi platform are not controlled by anyone but held securely by a smart contract code(learn more).",
  },
  {
    heading: "Do I need knowledge of blockchain to use PiggyFi?",
    body: "Anyone with a smart device and access to the internet who wants to save their funds in a stable currency to guard it against inflation can use the PiggyFi platform.",
  },
];

function toggleFaq(key) {
  if (!isShowing(key)) {
    setShow(key);
  } else {
    setShow(null);
  }
}

function isShowing(key) {
  return key === show;
}
