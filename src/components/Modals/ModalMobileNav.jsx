import React, { useState } from "react";
import Link from "next/link";
import { Modal } from "./index";

let mobileMenuModal, toggleMobileMenuModal;

export function ModalMobileNav() {
  [mobileMenuModal, toggleMobileMenuModal] = useState(false);

  return (
    mobileMenuModal && (
      <>
        <Modal>
          <div className="text-center">
            <button
              className="mb-6 hidden sm:inline mx-auto"
              onClick={() => toggleMobileMenuModal(false)}
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

            <div className="grid grid-rows-4 gap-8 text-gray-900 text-lg md:text-xl font-sm text-center">
              <Link href="/#features">
                <a
                  className="hover:text-purple"
                  onClick={() => toggleMobileMenuModal(false)}
                >
                  Features
                </a>
              </Link>
              <Link href="/#how-it-works">
                <a
                  className="hover:text-purple"
                  onClick={() => toggleMobileMenuModal(false)}
                >
                  How It works
                </a>
              </Link>
              <Link href="/#case-study">
                <a
                  className="hover:text-purple"
                  onClick={() => toggleMobileMenuModal(false)}
                >
                  Case study
                </a>
              </Link>
              <Link href="/#faqs">
                <a
                  className="hover:text-purple"
                  onClick={() => toggleMobileMenuModal(false)}
                >
                  FAQs
                </a>
              </Link>
            </div>

            <button
              className="mt-6 sm:hidden mx-auto"
              onClick={() => toggleMobileMenuModal(false)}
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
      </>
    )
  );
}

export function toggleMobileNavModal() {
  toggleMobileMenuModal(!mobileMenuModal);
}
