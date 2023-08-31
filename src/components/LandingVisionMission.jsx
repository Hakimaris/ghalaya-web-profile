import React from "react";
import { useTranslation } from "react-i18next";

const LandingVisionMission = () => {
  const [t, i18n] = useTranslation("global")
  const handleLanguageButtonClick = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="bg-neutral">
      <div className="container py-12 mx-auto md:px-6">
        <section className="text-center">
          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <div className="flex items-center justify-center mb-16">
              <h2 className="text-3xl font-bold">{t("VisiMisi.tentangKami")}</h2>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="mb-6 inline-block rounded-md bg-info p-4 text-neutral">
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h5 class="mb-4 text-lg font-bold">{t("VisiMisi.headerVisi")}</h5>
              <p class="text-neutral-500">{t("VisiMisi.descVisi")}</p>
            </div>

            <div class="mb-12 md:mb-0">
              <div class="mb-6 inline-block rounded-md bg-info p-4 text-neutral">
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </div>
              <h5 class="mb-4 text-lg font-bold">{t("VisiMisi.headerMission")}</h5>
              <p class="text-neutral-500">{t("VisiMisi.descMission")}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingVisionMission;
