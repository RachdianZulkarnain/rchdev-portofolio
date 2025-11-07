import { Suspense } from "react";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import About from "../sections/about";
import Hero from "../sections/hero";
import Projects from "../sections/projects";
import { BackgroundNoise } from "../backgrounds";
import Contact from "../sections/contact";
import Stats from "../sections/github-stats";

const PortfolioPage = () => {
  return (
    <>
      <div className="no-scrollbar portfolio-container relative size-full snap-y snap-mandatory overflow-y-scroll">
        <BackgroundNoise className="z-50" />
        <main
          className="
  relative z-10 min-h-screen snap-start md:px-12
  before:absolute before:top-0 before:left-0 before:h-full before:w-12
  before:border-r before:border-border
  before:bg-[linear-gradient(-135deg,var(--color-border)_25%,transparent_25%,transparent_50%,var(--color-border)_50%,var(--color-border)_75%,transparent_75%,transparent)]
  before:bg-size-[5px_5px]
  after:absolute after:top-0 after:right-0 after:h-full after:w-12
  after:border-l after:border-border
  after:bg-[linear-gradient(135deg,var(--color-border)_25%,transparent_25%,transparent_50%,var(--color-border)_50%,var(--color-border)_75%,transparent_75%,transparent)]
  after:bg-size-[5px_5px]

  max-md:before:hidden max-md:after:hidden
"
        >
          {" "}
          <Navbar />
          <div className="min-h-[calc(100vh-4rem)] md:px-8">
            <div className="min-h-[calc(100vh-4rem)] md:border-r md:border-l">
              <Hero />
              <Projects />
              {/* <About /> */}
              <Stats />
              <Contact />
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PortfolioPage;
