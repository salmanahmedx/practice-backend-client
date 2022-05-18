import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
    const { id } = useParams();

    //fetch product details - findOne
    const [itemDetails, setItemDetails] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setItemDetails(data))
    }, [id])

    return (
        <div>
            <h1>ID: {itemDetails?._id}</h1>
            <h1>Name: {itemDetails?.name}</h1>
            <ul>
                {
                    itemDetails?.slots.map((s, index) => <li key={index}>{s}</li>)
                }
            </ul>
        </div>
    );
};

export default ProductsDetails;