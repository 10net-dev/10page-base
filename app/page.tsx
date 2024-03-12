import { Hero } from "./components/public/hero/hero-alpha";
import { Features } from "./components/public/features/features-hotel";
import { Grid } from "./components/public/grid/grid-echo";
import { Card } from "./components/public/card/card-beta";
import { Map } from "./components/public/map/map-beta";
import { Footer } from "./components/public/footer/footer-charlie";

import { Cta } from "./components/public/cta";
import { Pricing } from "./components/public/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto px-[20px] lg:container lg:px-20">
        <Features />
        <Grid />
        <Card />
        {/* <Pricing />
        <Cta /> */}
      </div>
        <Map />
      <Footer />
    </>
  );
}
