import FavoriteCategory from "@/components/web/homePage/favoriteCategory";
import ScrollText from "@/components/web/homePage/scrollText";
import SliderSwipper from "@/components/web/homePage/sliderSwipper";

export default function Home() {
  return (
    <div className="w-full">
      <ScrollText/>
      <SliderSwipper/>

      <div className="mt-5 px-10">
        <FavoriteCategory/>
      </div>
    </div>
  );
}
