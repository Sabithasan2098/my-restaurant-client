import Banner from "@/components/home/banner/Banner";
import Category from "@/components/home/category/Category";
import CheckItOut from "@/components/home/checkItOut/CheckItOut";
import ChefRecommends from "@/components/home/chefRecommends/ChefRecommends";
import ChefService from "@/components/home/chefService/ChefService";
import Contact from "@/components/home/contact/Contact";
import Featured from "@/components/home/featured/Featured";
import Testimonial from "@/components/home/testimonial/Testimonial";

export default function Home() {
  const route = process.env.BASE_ROUTES;
  console.log(route);
  return (
    <div>
      <Banner />
      {/* not responsive */}
      <Category />
      <ChefService />
      <CheckItOut />
      <Contact />
      <ChefRecommends />
      <Featured />
      <Testimonial />
    </div>
  );
}
