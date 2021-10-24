import { RedialGradient } from "./RedialGradient";
import Image from "next/image";

export function DashboardFeatures() {
  return (
    <div className="bg-black">
      <div className="py-14 md:py-20">
        <div className="max-w-6xl px-4 w-full flex items-center mx-auto bg-purple bg-opacity-10 rounded-2xl px-9 py-5">
          <div className="max-w-3xl w-full mx-auto">
            <p className="text-xl md:text-3xl text-white italic leading-normal text-center mb-11 tracking-wide">
              <q>
                As software ate the world over the last decade, DeFi will eat
                traditional finance during the next one
              </q>
            </p>

            <p className="text-white text-right font-light">-Arthur Cheong</p>
          </div>
        </div>

        <div className="max-w-6xl px-4 mx-auto py-36 relative" id="features">
          <RedialGradient className="-bottom-16 right-0 top-0 left-0" />

          <div className="relative">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-2">
                Our Features
              </h2>
              <p className="font-light text-lg md:text-2xl text-white">
                Explore great features coming soon by PiggyFi
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((feature, key) => (
                <div
                  key={key}
                  className="rounded-3xl bg-purple-deep p-9"
                  style={{
                    boxShadow: "0px 18.6667px 46.6667px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <img
                    src={feature.iconPath}
                    alt={feature.name}
                    className="mb-6 h-16"
                  />
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                    {feature.name}
                  </h3>
                  <p className="text-white text-opacity-50 font-light">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    iconPath: "/images/savings.png",
    name: "Save",
    body: "Be able to save all of your earnings in stable currencies",
  },
  {
    iconPath: "/images/loan.png",
    name: "Loan",
    body: "Loan money from Piggyfi without any interest",
  },
  {
    iconPath: "/images/p2p.png",
    name: "P2P",
    body: "Conveniently exchange your fiat into stable currencies",
  },
  {
    iconPath: "/images/bill.png",
    name: "Bill Payment",
    body: "Pay all bills from the platform",
  },
  {
    iconPath: "/images/transaction.png",
    name: "In-app International transfer",
    body: "Easily make international transfers on the mobile app",
  },
  {
    iconPath: "/images/payment.png",
    name: "Request Crypto Payment",
    body: "Easily make international transfers on the mobile app",
  },
];
