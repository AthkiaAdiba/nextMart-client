import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllProducts } from "@/services/Product";
import { IProduct } from "@/types";
import Link from "next/link";

const FeaturedProducts = async () => {
  const { data: products } = await getAllProducts();
  return (
    <div className="bg-white bg-opacity-50 px-12 mx-auto">
      <div className="my-20">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Featured Products</h2>
          <Link href="/products">
            <Button variant="outline" className="rounded-full">
              All Collections
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8 my-5">
        {products.slice(0, 5).map((product: IProduct, idx: number) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
