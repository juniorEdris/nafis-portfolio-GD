import { LandingPageHeadings } from "@/components/primary/app-headings";
import SingleProject from "@/components/primary/single-project";

const AllProjects = () => {
  return (
    <section className="py-12" id="projects">
      <LandingPageHeadings heading="projects" />

      <div className="grid gap-y-1">
        {/*projects?.map((item, _idx) => (
          <SingleProject
            key={_idx}
            order={_idx % 2 === 0 ? "" : "rtl"}
            title={item?.title}
            image={item?.image}
            href={item?.href}
            description={item?.description}
            fiverrhref={item?.fiverrhref}
          />


        ))*/}
        <SingleProject
          title="Fiverr Project 01"
          description="Unite Living is like the ultimate matchmaker for roommates. It's all about finding that perfect fit based on what one's looking for in a roommate - their characteristics, personality traits, and interests. Let's face it, finding a place where everyone gets along can be a real challenge. But with Unite Living, we're flipping the script on how you search for roommates and a place to call home. Our mission is to shake up the housing market and adapt it to the changing world we live in. People are constantly on the move, whether it's within their own country or crossing borders. And let's be honest, we all want to rent homes that offer flexibility and the chance to live with people who make life enjoyable. Think of Unite Living as one's personal wingman, connecting you with future friends who are also on the hunt for a shared home. We're here to revolutionize the way you find roommates and a place to live. By bringing together people who genuinely get along, we're not only making your life easier, but we're also helping landlords secure longer rental periods. In the team of 43 developers, my contributions were as a Front end engineer."
          href="https://facebook.com/"
          image="/assets/images/landing_page/projects/eyt-site.png"
        />
      </div>
    </section>
  );
};

export default AllProjects;
