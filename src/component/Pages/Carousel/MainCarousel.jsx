
import EmblaCarousel from "./EmblaCarousel";
import EmblaHeader from "./EmblaHeader";
import "../Carousel/Carousel CSS/base.css"
import "../Carousel/Carousel CSS/embla.css"
import "../Carousel/Carousel CSS/sandbox.css"
import CarouselContent from "./CarouselContent";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const MainCarousel = () => {
  return (
    <main className="sandbox">
      <EmblaHeader />
      <section className="sandbox__carousel">
        
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          <CarouselContent></CarouselContent>
       
      </section>
    </main>
  );
};

export default MainCarousel;
