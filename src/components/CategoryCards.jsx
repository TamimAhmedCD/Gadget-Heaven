import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const CategoryCards = () => {
  const products = useLoaderData();
  const { category } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...products].filter(
        (product) => product.category === category
      );
      setProduct(filteredByCategory);
    } else{
        setProduct(products)
    }
  }, [category, products]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 px-4 pt-10 sm:px-6 lg:px-8">
      {product.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default CategoryCards;
