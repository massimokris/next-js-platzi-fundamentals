import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        window
        .fetch('api/avo')
        .then(res => res.json())
        .then(({ data }) => {
            setProductList(data)
        })
    }, [])

    return (
        <div>
            <Navbar/>
            <h1>Hola Massi!</h1>
            {productList.map((product) => (
                <div>{product.name}</div>
            ))}
        </div>
    );
};

export default Home;