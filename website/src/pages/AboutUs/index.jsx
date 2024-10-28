import React from "react";
import AboutUsContent from './components/AboutUsContent'
import ContactForm from './components/ContactForm'
export default function AboutUs() {
    return (
        <main className="flex overflow-hidden flex-col pb-24 bg-white">
          <div className="flex flex-col items-center w-full max-md:max-w-full">
            <section className="flex flex-col justify-center p-20 max-w-full w-[1442px] max-md:px-5">
              <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d21c0cc74cabd7b032c6886c641d7e87816983e34a4098a8273af8e8ac8e8a?placeholderIfAbsent=true&apiKey=c2a25a9998fa43bc8322aa18edf4f813"
                  alt="About Us illustration"
                  className="object-contain self-stretch my-auto aspect-[1.71] min-w-[240px] w-[570px] max-md:max-w-full"
                />
                <AboutUsContent />
              </div>
            </section>
            <section className="flex flex-col justify-center p-20 mt-6 max-w-full w-[1442px] max-md:px-5">
              <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
                <div className="flex flex-col min-w-[240px] text-black text-opacity-90 w-[632px] max-md:max-w-full">
                  <h2 className="text-4xl font-bold leading-[61px] max-md:max-w-full">
                    Want to try our delicious sweet treats? Chat with us now! We're
                    ready to help you.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed max-md:max-w-full">
                    You can request menu or something
                  </p>
                </div>
                <ContactForm />
              </div>
            </section>
          </div>
        </main>
      );
}



