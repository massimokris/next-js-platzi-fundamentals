import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const [product, setProduct] = useState()
    const { query: { id } } = useRouter() 

    useEffect(() => {
        (id) && window
                .fetch(`/api/avo/${id}`)
                .then(res => res.json())
                .then(({ data }) => {
                    setProduct(data)
                })
    }, [id])
    
    return (
        <div>
            <h1>Hola Producto! {product?.name}</h1>
        </div>
    );
};

export default ProductItem;