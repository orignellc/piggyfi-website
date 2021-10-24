import { useState } from "react";

let active, setActive;
export function DashboardHow() {
  [active, setActive] = useState(0);

  return (
    <div className="bg-black" id="how-it-works">
      <div className="py-14 md:py-20">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-2">
              How it works
            </h2>
            <p className="font-light text-xl md:text-3xl text-white">
              Simple and clear to use
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
                  <li className="mb-14">
                    <span className="font-medium">Faster transactions: </span>
                    Diversified sharding allowing faster transactions
                  </li>
                  <li className="mb-14">
                    <span className="font-medium">Cheaper fees: </span>
                    Lower gas fees for all transactions
                  </li>
                  <li className="mb-14">
                    <span className="font-medium">Highly scalable: </span>
                    Diversified sharding allowing faster transactions
                  </li>
                  <li>
                    <span className="font-medium">Integration: </span>
                    Integrating functionality quickly making product cycle
                    shorter
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
                  <li className="mb-14">
                    <span className="font-medium">Interoperability: </span>
                    Bridge to All Chains including Ethereum
                  </li>
                  <li className="mb-14">
                    <span className="font-medium">Maximum security: </span>
                    Diversified sharding allowing faster transactions
                  </li>
                  <li className="mb-14">
                    <span className="font-medium">Faster: </span>
                    Runs Ethereum applications with 2-second transaction
                    finality
                  </li>
                  <li>
                    <span className="font-medium">Cheaper: </span>
                    1000 times lower transaction fees
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
    name: "Convert your funds to USD (usdc)",
    body: "Choose your preferred deposit option like bank transfer, credit/debit card (for fiat), P2P or send digital assets directly to your wallet",
  },
  {
    iconPath: "/images/payment-screen.png",
    name: "Start Saving, Make Bills Payment & International Transfers",
    body: "Start saving in USD or any stable currency, make all bills payment as well as international transfers",
  },
];

function showDashed(key) {
  return steps.length !== key + 1 || isActive(key);
}

function isActive(key) {
  return key === active;
}

function switchActive(key) {
  if (!isActive(key)) {
    setActive(key);
  } else {
    setActive(null);
  }
}
