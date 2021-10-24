import Link from "next/link";
import Image from "next/image";

export function Menu() {
  return (
    <nav className="h-16 bg-gray-200 text-black flex items-center">
      <div className="max-w-6xl px-4 w-full flex items-center mx-auto">
        <div className="flex">
          <Link href="/">
            <a>
              <Image
                src="/images/logo_large.png"
                className="p-3"
                width="144"
                height="50"
                alt="logo"
              />
            </a>
          </Link>
        </div>

        <div className="ml-auto hidden md:block text-sm leading-tight">
          <Link href="/#features">
            <a className="mr-8 hover:text-purple">Features</a>
          </Link>
          <Link href="/#how-it-works">
            <a className="mr-8 hover:text-purple">How It works</a>
          </Link>
          <Link href="/#case-studies">
            <a className="mr-8 hover:text-purple">Case studies</a>
          </Link>
          <Link href="/#faqs">
            <a className="mr-8 hover:text-purple">FAQs</a>
          </Link>
        </div>
        <div className="flex ml-auto">
          <span className="cursor-pointer hover:bg-gray-200 hover:text-black p-2">
            <img
              src="/images/nigeria.png"
              alt="Nigeria"
              className="inline h-8 ml-2"
            />
          </span>

          {/* <span className="mr-4 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </span> */}

          {/* <span className="mr-4s cursor-pointer p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </span> */}

          <button className="md:hidden ml-4 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
