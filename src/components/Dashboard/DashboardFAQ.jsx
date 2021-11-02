import { Telegram, Medium, Twitter, Plus } from "../Icons";
import { useState } from "react";
import Link from "next/link";

let show, setShow;

export function DashboardFAQ() {
  [show, setShow] = useState(null);

  return (
    <div className="relative bg-black" id="faqs">
      <div className="py-14 md:py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-medium text-white">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        <div className="max-w-6xl px-4 w-full mx-auto rounded-2xl px-9 py-5">
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, key) => (
              <div key={key}>
                <div className="rounded-3xl bg-purple-deep bg-opacity-20 p-9 card-shadow">
                  <div className="">
                    <div className="flex items-center mb-3">
                      <span
                        className="cursor-pointer"
                        onClick={() => toggleFaq(key)}
                      >
                        <Plus width="24" height={24} />
                      </span>
                      <h3
                        className="text-white text-lg sm:text-xl font-medium ml-2 cursor-pointer"
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
              </div>
            ))}
          </div>

          <div className="max-w-3xl px-4 mx-auto my-16 text-white text-center text-xl md:text-3xl">
            Do you still have more questions?
            <br />
            Join Our community or send us an
            <a
              href="mailto:piggyfiafrica@gmail.com"
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
              <Link href="https://twitter.com/@PiggyFi_Africa">
                <a>
                  <Twitter className="h-16 md:h-24 w-16 md:w-24 mr-10 md:mr-14" />
                </a>
              </Link>
              <Link href="https://t.me/joinchat/ta7u0Qk1V7s1OWRk">
                <a>
                  <Telegram className="h-16 md:h-24 w-16 md:w-24 mr-10 md:mr-14" />
                </a>
              </Link>
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
    body: "A Decentralised Finance (Defi) savings platform, built on the blockchain without the need for an ethereum client such as Metamask or Trust Wallet. PiggyFi allows Africans to save in a stable currency like US Dollars by leveraging stable cryptocurrencies like USDT and earning interest on savings by staking in lending protocols.",
  },
  {
    heading: "Does PiggyFi work with any traditional Financial Institution?",
    body: "No, PiggyFi is built on the blockchain and therefore is decentralized. It allows liquidity on the platform with the use of an automated P2P system.",
  },
  {
    heading: "What problem does PiggyFi solves?",
    body:
      "Sub-Saharan Africa has one of the highest inflation rates in the world.\n" +
      "Individuals and Families saving money in their local currency do not have an easy way to guard their life savings against devaluation.\n" +
      "PiggyFi is out to solve the Inflation problem in Sub-Saharan Africa\n",
  },
  {
    heading:
      "Why is PiggyFi Better than other Traditional Fintech Savings Platforms?",
    body: "PiggyFi is a blockchain-based platform. To prevent fraud, all transactions are transparent and open to everyone. There are no limits to USD transactions as long as you pass the KYC checks; and most importantly, your funds are secured on the blockchain and are not held by any single entity.",
  },
  {
    heading: "Do I need knowledge of blockchain to use PiggyFi?",
    body: "Anyone from Sub-Saharan Africa with a smart device and access to the internet who wants to save their funds in a stable currency to guard it against inflation can use the PiggyFi platform.",
  },
  {
    heading: "How do you convert my funds to USD using blockchain?",
    body: "By using an automated P2P system, you can convert your local currency into USDT, a stable currency on the blockchain, which is an equivalent of the US Dollar and vice versa.",
  },
  {
    heading: "What is peer-to-peer (P2P) trading?",
    body: "P2P (peer-to-peer) trade is also known as customer-to-customer trading. In a peer-to-peer (P2P) transaction, a Piggyfi user transacts directly with his or her vendor, exchanging local currency offline and verifying the transaction online. The digital asset is released to the buyer once both parties have confirmed the offline local currency exchange. By automating the process PiggyFi removes the technicalities for day-to-day users and protects you from fraud by onboarding verified P2P vendors who validate your transactions in less than 5 minutes.",
  },
  {
    heading: "How can I withdraw funds on PiggyFi?",
    body: "Using the P2P system you can easily convert your USD into your local currency. PiggyFi automates the process by selecting the first available vendor with the best offer who validates your transaction within 5 minutes.",
  },
  {
    heading: "How secure is PiggyFi?",
    body: "All funds deposited on the PiggyFi platform are not controlled by anyone but held securely by a smart contract code on the blockchain(learn more).",
  },
  {
    heading: "How secure is PiggyFi?",
    body: "All funds deposited on the PiggyFi platform are not controlled by anyone but held securely by a smart contract code on the blockchain(learn more).",
  },
  {
    heading: "How does PiggyFi benefit from building on Xend Finance SDK?",
    body: "By building on Xend Finance SDK, It becomes easier to quickly iterate our products and launch without having to worry about setting up the whole system of integrating and securing with different lending protocols directly. We also benefit from earning $XEND tokens which are in turn distributed to PiggyFi users",
  },
  {
    heading: "How does PiggyFi benefit from building on Harmony?",
    body: "All transactions performed on PiggyFi are carried out directly on the blockchain and each transaction costs a fee. By building on Harmony, we are able to save a lot on transaction costs due to the low transaction fee on the Harmony network. Furthermore, with Harmony Bridge, we are able to Bridge to Ethereum and other chains.",
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
