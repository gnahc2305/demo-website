import { Footer, Navbar } from "../components";
import { About, Explore, GetStarted, Hero, World } from "../sections";

const Page = () => (
  <div className="overflow-hidden bg-black">
    <Navbar />
    <Hero />

    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>

    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>

    <div className="relative">
      <World />
      <div className="gradient-04 z-0" />
      <GetStarted />
    </div>

    <Footer />
  </div>
);

export default Page;
