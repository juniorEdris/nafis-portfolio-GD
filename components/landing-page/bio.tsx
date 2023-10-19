import Container from "@/components/primary/container";
import Link from "next/link";
import { appTransitionClasses } from "@/lib";

const LandingPageBio = () => {
  return (
    <section className="py-12" id="my-bio">
      <Container>
        <div className="grid place-content-center">
          <div className="grid place-content-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg md:text-2xl lg:text-3xl text-app-light mb-1 uppercase">
                Hello!
              </h1>

              <h1 className="text-xl md:text-4xl lg:text-5xl text-app-light font-semibold leading-relaxed uppercase">
                I am Shahadat
              </h1>

              <h1 className="md:text-xl lg:text-2xl text-app-yellow leading-relaxed capitalize">
                freelance graphic designer
              </h1>

              <div className="">
                <Link
                  href={`#about-me`}
                  className={`flex justify-center items-center sm:inline-block py-3 px-6 border border-app-light text-app-light hover:text-app-dark ${appTransitionClasses}`}
                >
                  Find Out More
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
