import { ModalEmailSubscribe, toggleEmailSubscribe } from "../Modals";
import { Africa } from "../Icons";

export function DashboardHero() {
  return (
    <div className="bg-black">
      <div className="bg-gradient-to-br from-purple-hero to-black-hero">
        <div className="max-w-6xl px-4 w-full flex items-center mx-auto py-14 md:py-16 grid sm:grid-cols-2 md:grid-cols-3 relative">
          {/*<Africa className="absolute left-1/2 bottom-0 top-0 right-0" />*/}

          <div className="md:col-span-2 relative">
            <h1 className="text-white text-6xl md:text-8xl font-bold mb-6 md:mb-8">
              A smart <span className="inline-block">way to save</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white font-light mb-11 leading-normal">
              A convenient way for Africans to convert their earnings into
              stable currency like USD and guard against inflation
            </p>
            <button
              className="text-white py-5 px-11 rounded-2xl btn-bg-gradient-purple"
              onClick={toggleEmailSubscribe}
            >
              Join the wait list
            </button>
          </div>
        </div>
      </div>
      <ModalEmailSubscribe />
    </div>
  );
}
