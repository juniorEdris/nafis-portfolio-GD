import LandingPageBio from "@/components/landing-page/bio";
import AboutMe from "@/components/landing-page/about";
import MyServices from "@/components/landing-page/my-services";
import FiverrServicesSection from "@/components/landing-page/fiverr-sevices";
import AllProjects from "@/components/landing-page/projects";

export default function Home() {
  return (
    <main className="">
      <LandingPageBio />
      <AboutMe />
      <MyServices />
      <FiverrServicesSection />
      <AllProjects />
    </main>
  );
}
