import { useRef, useState } from "react";
import { Modal } from "./index";

let processing, setProcessing;
let country, setCountry;

export function ModalCountries() {
  [processing, setProcessing] = useState(false);
  [country, setCountry] = useState(false);

  return (
    country && (
      <Modal>
        <div className="flex flex-col justify-center items-center">
          <button
            className="mb-6 hidden sm:inline mx-auto"
            onClick={() => setCountry(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex items-center mb-4">
            <img src="/images/ghana.png" alt="Ghana" className="h-8" />
            <div className="ml-2 text-sm text-opacity-70">Ghana</div>
          </div>
          <div className="flex items-center mb-4">
            <img
              src="/images/south-africa.png"
              alt="South Africa"
              className="h-8"
            />
            <div className="ml-2 text-sm text-opacity-70">South Africa</div>
          </div>
          <div className="flex items-center mb-4">
            <img src="/images/zimbabwe.png" alt="Zimbabwe" className="h-8" />
            <div className="ml-2 text-sm text-gray-600">Zimbabwe</div>
          </div>
          <div className="flex items-center mb-4">
            <img src="/images/kenya.png" alt="kenya" className="h-8" />
            <div className="ml-2 text-sm text-gray-600">Kenya</div>
          </div>

          <button
            className="mt-6 sm:hidden mx-auto"
            onClick={() => setCountry(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </Modal>
    )
  );
}

export function toggleCountry() {
  setCountry(!country);
}
