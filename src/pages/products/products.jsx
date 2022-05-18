import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                const valid = data.map(d => d.slots && d)
                const prod = [];
                valid.map(v => typeof v !== "undefined" && prod.push(v))
                setProducts(prod);
            })
    }, [])

    return (
        <div>
            <h1 className="text-5xl pb-5">Products</h1>
            <div className="card-container grid grid-cols-3 gap-5 place-items-center">
                {
                    products?.map(product => <div className="card w-96 bg-base-100 shadow-xl" key={product?._id} >
                        <div className="card-body">
                            <h2 className="card-title m-2 mx-auto">{product?.name}</h2>
                            <select name='time'>
                                {
                                    product?.slots.map((s, index) => <option key={index}>{s}</option>)
                                }
                            </select>
                            <div className="card-actions justify-center m-3">
                                <Link to={`/products/${product?._id}`}>
                                    <button className="btn btn-sm">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default Products;