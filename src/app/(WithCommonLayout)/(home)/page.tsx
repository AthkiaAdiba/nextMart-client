import Category from "@/components/modules/home/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import HeroSection from "@/components/modules/home/HeroSection";

const HomePage = () => {
  //   const user = useUser();
  //   console.log(user);
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
