import { Cta } from "./components/public/cta";
import { Pricing } from "./components/public/pricing";
import { Hero } from "./components/public/hero/hero-alpha";
import { Features } from "./components/public/features/features-juliet";
import { Grid } from "./components/public/grid/grid-golf";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
        <Grid />
        <Pricing />
        <Cta />
      </div>
    </>
  );
}
