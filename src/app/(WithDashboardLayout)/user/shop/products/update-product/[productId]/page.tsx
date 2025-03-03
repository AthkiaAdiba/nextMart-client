import UpdateProductsForm from "@/components/modules/shop/product/UpdateProductForm";
import { getSingleProduct } from "@/services/Product";

const UpdateProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product } = await getSingleProduct(productId);

  return (
    <div className="flex justify-center items-center">
      <UpdateProductsForm product={product} />
    </div>
  );
};

export default UpdateProductPage;
