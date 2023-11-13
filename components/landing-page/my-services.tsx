import Container from "@/components/primary/container";
import { LandingPageHeadings } from "@/components/primary/app-headings";

const MyServices = () => {
  return (
    <section className="py-12" id="my-services">
      <Container>
        <LandingPageHeadings heading="My Services" headingClassName="" />
      </Container>
      <div className="min-h-[250px] bg-gray-100 flex justify-center items-center">
        slider section starts here
        {/*<HeroSlider items={heroSlides} />*/}
      </div>
    </section>
  );
};

export default MyServices;
