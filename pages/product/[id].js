import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const route = useRouter()
    return (
        <div>
            <h1>Hola Producto! {route.query.id}</h1>
        </div>
    );
};

export default ProductItem;