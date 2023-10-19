import Container from "@/components/primary/container";
import { routes } from "@/lib/uiData";
import Link from "next/link";
import { appTransitionClasses } from "@/lib";
import { IRoutes } from "@/lib/interface";

export const AppHeader = () => {
  return (
    <section className="py-3 w-full h-fit z-20 fixed top-0 left-0 bg-blue-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hidden sm:block">
      <Container>
        <div className="flex items-center justify-center">
          <ul className="flex items-center gap-4">
            {routes?.map((item: IRoutes, _idx: number) => (
              <li key={_idx}>
                <Link
                  href={item?.href}
                  className={`text-sm md:text-lg xl:text-2xl text-app-yellow capitalize hover:text-app-light font-medium ${appTransitionClasses}`}
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
