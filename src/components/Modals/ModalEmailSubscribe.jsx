import { useRef, useState } from "react";
import { Modal } from "./index";
import { subscribe } from "../../helpers/subscribe";

let processing, setProcessing;
let mobileEmailSubscribe, setMobileEmailSubscribe;
let emailRef, firstnameRef, lastnameRef;

export function ModalEmailSubscribe() {
  [processing, setProcessing] = useState(false);
  [mobileEmailSubscribe, setMobileEmailSubscribe] = useState(false);
  emailRef = useRef();
  lastnameRef = useRef();
  firstnameRef = useRef();

  return (
    mobileEmailSubscribe && (
      <Modal>
        <div>
          <form onSubmit={(e) => submit(e)}>
            <div className="">
              <input
                ref={emailRef}
                required
                type="email"
                className="border-gray-200 border-2 bg-white inline-block w-full px-4 py-2 rounded-md mb-4"
                placeholder="Enter your email address"
              />
              <div className="flex">
                <input
                  ref={firstnameRef}
                  required
                  className="border-gray-200 border-2 bg-white inline-block w-full px-4 py-2 rounded-md mb-4 mr-4"
                  placeholder="Enter your firstname"
                />
                <input
                  ref={lastnameRef}
                  required
                  className="border-gray-200 border-2 bg-white inline-block w-full px-4 py-2 rounded-md mb-4"
                  placeholder="Enter your lastname"
                />
              </div>
              {processing ? (
                <button className="inline-block px-5 py-2 text-white bg-black rounded text-base font-semibold bg-opacity-30 cursor-not-allowed">
                  Subscribe
                </button>
              ) : (
                <div>
                  <button
                    type="submit"
                    className="inline-block px-5 py-2 text-white bg-black hover:bg-gray-700 rounded text-base font-semibold bg-opacity-90"
                  >
                    Subscribe
                  </button>
                  <button
                    onClick={toggleEmailSubscribe}
                    type="submit"
                    className="ml-2 px-5 py-2 text-black hover:text-gray-600 text-base font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </Modal>
    )
  );
}

function submit(e) {
  e.preventDefault();
  setProcessing(true);

  const done = () => {
    window.localStorage.setItem("popped", true);
    setProcessing(false);
    emailRef.current.value = "";
    firstnameRef.current.value = "";
    lastnameRef.current.value = "";
  };

  const failed = () => setProcessing(false);

  subscribe({
    failed,
    done,
    email: emailRef.current.value,
    firstname: firstnameRef.current.value,
    lastname: lastnameRef.current.value,
  });
}

export function toggleEmailSubscribe() {
  setMobileEmailSubscribe(!mobileEmailSubscribe);
}
