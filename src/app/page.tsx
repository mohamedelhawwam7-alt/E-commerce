import Slider from "./_component/slider/Slider";
import FeaturedProducts from "./_component/FeaturedProducts";
import CategoriesSection from "./_component/CategorySlider/CategorySlider";
import PromoBanners from "./_component/PromoBanners";
import NewsletterAppSection from "./_component/NewsletterAppSection";

export default function Home() {
  return (
    <main>
      <Slider />
      <CategoriesSection />
      <PromoBanners />
      <FeaturedProducts />
      <NewsletterAppSection />
    </main>
  );
}
