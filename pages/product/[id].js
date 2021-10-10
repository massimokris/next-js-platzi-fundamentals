import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/avo')
    const { data } = await res.json()

    const paths = data.map(({ id }) => ({
        params: {
            id
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params?.id
    const res = await fetch(`http://localhost:3000/api/avo/${id}`)
    const product = await res.json()

    return {
        props: { product },
    };
};

const ProductItem = ({ product }) => {
    return (
        <div>
             {product == null ? null : <h1>Hola Producto! {product.name}</h1>}
        </div>
    )
}

export default ProductItem