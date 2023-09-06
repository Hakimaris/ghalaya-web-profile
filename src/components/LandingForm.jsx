
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

export default function LandingForm() {
  const [t,i18n] =  useTranslation("global")
  return (
    <section className="px-8 bg-neutral" id="kontak">
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl">{t("contactUs.header")}</h1>
            <p className="text-gray-500">{t("contactUs.desc")}</p>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-accent dark:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 text-gray-500 truncate w-72">
                  Jl. Teluk Kumai Barat No 70 <br></br> 
                  Surabaya, Jawa Timur <br></br>
                  60165
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-accent dark:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-gray-500 truncate w-72">
                info@ghalaya.com
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-info rounded-lg shadow-2xl dark:bg-info lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
              <h1 className="text-lg font-medium text-gray-100">
                {t("contactUs.formHeader")}
              </h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    {t("contactUs.formNameHeader")}
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-base-300 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-accent dark:focus:border-accent focus:ring-accent focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    {t("contactUs.formMailHeader")}
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-base-300 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-accent dark:focus:border-accent focus:ring-accent focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    {t("contactUs.formMsgHeader")}
                  </label>
                  <textarea
                    className="block max-h-16 w-full h-32 px-5 py-3 mt-2 text-gray-600 placeholder-gray-400 bg-base-300 border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-accent dark:focus:border-accent focus:ring-accent focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Hallo"
                  ></textarea>
                </div>

                <button className="overflow-y-auto w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-info capitalize transition-colors duration-300 transform bg-neutral rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  {t("contactUs.formSend")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
