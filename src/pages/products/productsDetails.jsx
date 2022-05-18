import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const ProductsDetails = ({ setProducts, products }) => {
    const { id } = useParams();

    //fetch product details - findOne
    const [itemDetails, setItemDetails] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setItemDetails(data))
    }, [id])

    //update details


    const handleUpdate = (e) => {
        const url = `http://localhost:5000/products/${id}`
        e.preventDefault()
        const inputValue = e.target.name.value;
        const updateDetails = { name: inputValue };
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateDetails),
        })
            .then(res => res.json())
            //updating UI with updated details
            .then(data => {
                if (data.acknowledged) {
                    fetch(url)
                        .then(res => res.json())
                        .then(data => setItemDetails(data))
                }
            })
    }

    //Delete Details

    const handleDelete = id => {
        const proceed = window.confirm(`Are you sure you want to delete?`)
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(async res => {
                    const data = await res.json();
                    console.log(data)
                    const remainingItems = products.filter(product => product._id !== Number(id))
                    setProducts(remainingItems)
                })

        }
    }

    return (
        <div className='text-xl'>
            <h1>ID: {itemDetails?._id}</h1>
            <h1>Name: {itemDetails?.name}</h1>
            <ul>
                {
                    itemDetails?.slots.map((s, index) => <li key={index}>{s}</li>)
                }
            </ul>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" placeholder='Treatment Name' className='m-4' /><br></br>
                <input type="submit" value="update" className='btn' />
                <button className='delete btn m-2' onClick={() => handleDelete(id)}>Delete</button>
            </form>
        </div>
    );
};

export default ProductsDetails;