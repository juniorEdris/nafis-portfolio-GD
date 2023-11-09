import Container from "@/components/primary/container";
import Link from "next/link";
import { appTransitionClasses } from "@/lib";

const LandingPageBio = () => {
  return (
    <section
      className="py-12 bg-bio_bg bg-top bg-fixed bg-cover bg-no-repeat"
      id="my-bio"
    >
      <Container>
        <div className="grid place-content-center">
          <div className="grid place-content-center">
            <div className="flex flex-col gap-y-2 py-9 uppercase">
              <h1 className="text-center text-lg md:text-3xl lg:text-6xl text-app-gray mb-1 font-helveticaNow">
                Hello!
              </h1>

              <h1 className="text-center text-xl md:text-4xl lg:text-7xl text-app-gray font-medium tracking-tighter">
                I am Shahadat
              </h1>

              <h1 className="text-center md:text-xl lg:text-4xl text-app-gray leading-relaxed font-helveticaNow">
                freelance
              </h1>

              <h1 className="text-center md:text-xl lg:text-4xl text-app-primary font-helveticaNow leading-relaxed">
                graphic designer
              </h1>

              <div className="text-center md:pt-6">
                <Link
                  href={`#about-me`}
                  className={`flex justify-center items-center sm:inline-block py-3 px-6 rounded-md bg-app-primary md:text-xl text-app-light drop-shadow-xl hover:bg-opacity-80 ${appTransitionClasses}`}
                >
                  HIRE ME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LandingPageBio;
