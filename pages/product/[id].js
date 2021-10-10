import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// export const getServerSideProps = async (context) => {
//   return {
//     props: { query: context.query },
//   };
// };

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    }
  }, [id]);

  return (
    <div>{product == null ? null : <h1>Hola Producto! {product.name}</h1>}</div>
  );
};

export default ProductItem;
