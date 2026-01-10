import { getProductById } from "@/lib/api";
import { Product } from "@/types/product";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params; 
  const product: Product = await getProductById(id);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-96 object-contain mx-auto"
        />

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-500 mt-2">{product.category}</p>
          <p className="mt-4">{product.description}</p>
          <p className="text-xl font-semibold mt-4">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
