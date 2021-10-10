import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// export const getServerSideProps = async () => {
//     const res = await fetch('http://localhost:3000/api/avo')
//     const { data } = await res.json()
//     return {
//         props: {
//             productList: data
//         }
//     }
// }

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/avo')
    const { data } = await res.json()
    return {
        props: {
            productList: data
        }
    }
}


const Home = ({ productList }) => {

    useEffect(() => {
        
    }, [])

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
    )
}

export default Home