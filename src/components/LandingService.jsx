import React from "react";
import { useTranslation } from "react-i18next";

const LandingService = () => {
  const [t,i18n] = useTranslation("global")
  return (
    <section className="bg-neutral" id="service">
      <div className="container flex flex-col items-center p-2 mx-auto space-y-6 md:p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-16 h-16 text-info"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M510.483,255.994c-2.596-5.459-8.1-8.937-14.145-8.937h-56.442v-51.279c0-8.649-7.012-15.662-15.662-15.662h-35.121 v-41.045c0-8.649-7.012-15.662-15.662-15.662H271.888H170.325c-8.649,0-15.662,7.012-15.662,15.662v41.045h-35.12 c-8.649,0-15.662,7.012-15.662,15.662v51.279H73.706v-32.11c0-8.649-7.012-15.662-15.662-15.662s-15.662,7.012-15.662,15.662 v32.11H28.897c-11.202,0-21.172,6.274-26.018,16.374c-4.847,10.1-3.503,21.803,3.506,30.542l16.195,20.192v58.764 c0,8.649,7.012,15.662,15.662,15.662h385.437c8.493,0,15.438-6.769,15.657-15.259l0.418-16.276l68.732-84.451 C512.3,267.916,513.077,261.452,510.483,255.994z M408.572,211.44v35.617h-70.24V211.44H408.572z M287.55,154.733h70.24v25.384 h-35.119H287.55V154.733z M307.008,211.44v35.617h-70.24V211.44H307.008z M185.986,154.733L185.986,154.733h70.24v25.384h-35.12 h-35.12V154.733z M135.205,211.44h70.24v35.617h-70.24V211.44z M408.578,350.91l-0.163,6.357H53.903v-8.956h354.962 C408.698,349.163,408.601,350.032,408.578,350.91z M431.979,316.987H53.903v-8.328c0-3.564-1.215-7.02-3.445-9.799l-16.426-20.48 h85.51h101.563H322.67h101.563h39.164L431.979,316.987z"></path>{" "}
          </g>
        </svg>
        <p className="px-6 py-1 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl text-info">{t("Layanan.header")}</p>
      </div>
    </section>
  );
};

export default LandingService;
