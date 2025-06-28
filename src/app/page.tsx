import Banner from "@/components/home/banner/Banner";
import Category from "@/components/home/category/Category";
import ChefService from "@/components/home/chefService/ChefService";

export default function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <ChefService />
    </div>
  );
}
