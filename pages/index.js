import React, { useEffect, useState } from "react";
import Link from "next/link";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch("api/avo")
      .then((res) => res.json())
      .then(({ data }) => {
        setProductList(data);
      });
  }, []);

  return (
    <div>
      <h1>Hola Massi!</h1>
      {productList.map((product) => (
        <div>
          <Link href={`/product/${product.id}`}>
            <a>{product.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
