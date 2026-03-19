import { getSingleProducts } from "@/actions/server/product";
import CartButton from "@/components/buttons/CartButton";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProducts(id); // your API call

  return {
    title: product.title,
    description: product.description,

    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProducts(id);
  const discountPrice =
    product.price - (product?.price * product?.discount) / 100;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="bg-base-200 rounded-xl p-4">
          <Image
            src={product?.image}
            alt={product?.title}
            width={500}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <p className="text-gray-500">{product?.bangla}</p>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center text-yellow-500">
              <FaStar />
              <span className="ml-1 font-medium">{product?.ratings}</span>
            </div>

            <span className="text-gray-500">({product?.reviews} reviews)</span>

            <span className="text-gray-500">{product?.sold} sold</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-primary">
              ৳{discountPrice}
            </span>

            {product.discount > 0 && (
              <span className="line-through text-gray-400">
                ৳{product?.price}
              </span>
            )}

            {product.discount > 0 && (
              <div className="badge badge-error text-white">
                -{product?.discount}%
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-2">Features</h3>

            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {product?.info?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <CartButton product={product} />
        </div>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-3">Description</h2>
        <p className="text-gray-600 whitespace-pre-line">
          {product?.description}
        </p>
      </div>

      {/* Q&A */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Questions & Answers</h2>

        <div className="space-y-3">
          {product?.qna?.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 bg-base-100">
              <p className="font-semibold">Q: {item?.question}</p>
              <p className="text-gray-600 mt-1">A: {item?.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
