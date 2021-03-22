import React from 'react'

export default function ProductCard(props) {
    const product = props.item

    return (
        <div className="card z-depth-0" style={{
            border: "10px solid #fafafa",
            borderRadius:"5px"
        }}>
            
            <div className="card-image">
                    <img src={product.image} height="200px" alt="" />
                </div>
                
            <div className="card-content grey lighten-5 ">
                    <div className="  p-16">
                        <a href="#" className="white btn-flat center green-text"
                            style={{
                                textTransform:"none"
                            }}>
                            <i className="material-icons left">
                                {product.icon}
                            </i>
                           <b>{product.section}</b> 
                        </a>
                    </div>
                    <div className="center">
                        <p>
                            <a href="#" className="black-text">
                                <b>
                                    {product.categories}
                                </b>
                            </a>
                        </p>
                        <h4>
                            {product.price}
                        </h4>
                        <p style={{fontSize:"14px"}}>
                            <a href="#" className="green-text">
                                <b>
                                    View Upsell Product
                                </b>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
    )
}
