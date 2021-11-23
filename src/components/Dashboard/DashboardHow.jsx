import { useEffect, useState } from "react";
import { Mark } from "../Icons";

let active, switchActive;
let counter, setCounter;
let interval;

export function DashboardHow() {
  [active, switchActive] = useState(0);
  [counter, setCounter] = useState(0);

  useEffect(intervalForCounterIncrementEffect, []);
  // setIntervalForCounterIncrement(useEffect);

  return (
    <div className="bg-black" id="how-it-works">
      <div className="py-14 md:py-20">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-2">
              How it works
            </h2>
            <p className="font-light text-xl md:text-3xl text-white">
              Simple to use
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center justify-center md:order-2">
              <img src={steps[active].iconPath} className="w-full" />
            </div>
            <div>
              {steps.map((step, key) => (
                <div
                  key={key}
                  className={
                    isActive(key)
                      ? "rounded-3xl bg-purple-deep px-10 pl-4 mb-10 md:flex items-stretch card-shadow cursor-pointer"
                      : "rounded-3xl px-10 pl-4 mb-10 md:flex items-stretch cursor-pointer"
                  }
                  onClick={() => switchActive(key)}
                >
                  <div className="mr-7">
                    <div className="pt-8 md:pt-0">
                      <div className="rounded-full border border-white bg-purple-deep flex items-center justify-center h-8 md:h-12 w-8 md:w-12 text-white">
                        {key + 1}
                      </div>
                    </div>
                    <div
                      className={
                        showDashed(key)
                          ? "w-1/2 h-full border-r border-dashed border-white"
                          : ""
                      }
                    />
                  </div>
                  <div className="py-8">
                    <h4 className="text-white text-xl md:text-2xl font-medium mb-2">
                      {step.name}
                    </h4>
                    <p className="text-white text-lg md:text-xl font-light">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-14 md:py-20">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-white">
              <h4 className="text-center text-white text-2xl md:text-4xl font-medium mb-8">
                Building with Xend finance layer 2 architecture & SDK
              </h4>

              <div className="rounded-3xl bg-purple-deep px-7 py-11 mb-10 md:flex items-stretch text-lg md:text-xl font-light card-shadow">
                <ul>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Faster transactions: </span>
                      Diversified sharding allowing faster transactions
                    </div>
                  </li>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Cheaper fees: </span>
                      Lower gas fees for all transactions
                    </div>
                  </li>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Highly scalable: </span>
                      Integrating functionality quickly, making the product
                      cycle shorter
                    </div>
                  </li>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Higher Interest: </span>
                      Xend tokens earned, will be distributed to customers in
                      USD as interest
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-white">
              <h4 className="text-white text-2xl md:text-4xl text-center font-medium mb-8">
                Building with Harmony Bridge to Ethereum Chain
              </h4>

              <div className="rounded-3xl bg-purple-deep px-7 py-11 mb-10 md:flex items-stretch text-lg md:text-xl font-light card-shadow">
                <ul>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Interoperability: </span>
                      Bridge to All Chains including Ethereum
                    </div>
                  </li>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Maximum security: </span>
                      Delegated Proof-of-Stake consensus mechanism
                    </div>
                  </li>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Faster: </span>
                      Runs Ethereum applications with 2-second transaction
                      finality
                    </div>
                  </li>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Cheaper: </span>
                      1000 times lower transaction fees
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-white">
              <h4 className="text-white text-2xl md:text-4xl text-center font-medium mb-8">
                Building with Cronos
              </h4>

              <div className="rounded-3xl bg-purple-deep px-7 py-11 mb-10 md:flex items-stretch text-lg md:text-xl font-light card-shadow">
                <ul>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">EVM Compatible: </span>
                      Our smart contracts will be deployed on the EVM. Cronos
                      powered by Ethermint supported Dapps deployed on Ethereum
                    </div>
                  </li>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Scalable: </span>
                      Cronos can process way more transactions per minute than
                      the EVM, making it faster, cheaper and greener 🌱 to
                      execute smart contracts
                    </div>
                  </li>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Interoperable: </span>
                      It is easy to exchange assets and services, transfer
                      value, and allow blockchains to talk to each other without
                      running into the scaling issues on Cronos, which is common
                      amongst some of the largest blockchains today
                    </div>
                  </li>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Easy deployment: </span>
                      We can quickly and easily deploy on the Cronos network
                      once we are ready to go live without running into issues.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-white">
              <h4 className="text-white text-2xl md:text-4xl text-center font-medium mb-8">
                Building with Celo Platform
              </h4>

              <div className="rounded-3xl bg-purple-deep px-7 py-11 mb-10 md:flex items-stretch text-lg md:text-xl font-light card-shadow">
                <ul>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Celo Asset: </span>
                      With the Celo Dollar (cUSD) stable currency tracking the
                      US Dollar, we will be able to move value across countries
                      faster, cheaper.
                    </div>
                  </li>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Low Fees: </span>
                      With the volume of daily transactions that would be
                      carried out on our platform daily, Celo offers us
                      Ultra-low network transaction fees thereby saving us a lot
                      of costs.
                    </div>
                  </li>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">Staking: </span>
                      We will take advantage of Celo POS used to secure the
                      network, and use saved assets on our platform to generate
                      yield which is in turn distributed as an interest to our
                      user’s savings.
                    </div>
                  </li>
                  <li className="mb-14 flex">
                    <Mark className="h-7 w-7 inline mt-1 mr-2 flex-shrink-0" />
                    <div className="">
                      <span className="font-medium">
                        Optimized for Financial Application:{" "}
                      </span>
                      Celo’s industry-leading decentralized phone number
                      verification will allow users to easily send or request
                      digital currencies across the border from any mobile
                      number
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    iconPath: "/images/create-account.png",
    name: "Create your account",
    body: "Please provide your full name, valid email address and input a secure password for your account",
  },
  {
    iconPath: "/images/convert.png",
    name: "Convert your funds to USD",
    body: "Convert your local currency to a stable digital currency such as USDT through a secured P2P system. Pay via bank transfer with a 1% transaction fee.",
  },
  {
    iconPath: "/images/payment-screen.png",
    name: "Start Saving, Make Bills Payment & Transfers",
    body: "Start saving in USD or any stable currency, make all bill payments, and execute transfers from your wallet to other PiggyFi users across 6 African countries.",
  },
];

function showDashed(key) {
  return steps.length !== key + 1 || isActive(key);
}

function isActive(key) {
  return key === active;
}

function intervalForCounterIncrementEffect() {
  interval = setInterval(() => {
    setCounter((prevCount) => prevCount + 1);
    switchActive(counter % 3);
  }, 6000);
  return () => {
    clearInterval(interval);
  };
}
