import React from 'react'
import ProductCard from './../widgets/ProductCard'

export default function Vendors() {

     var products = [
        {
            image: "/assets/card1.png",
            icon:"devices",
            iconColor:"green-text",
            section: "Digital Product",
            categories: "Branding Strategy Vol1",
            price:"250€",
            url:"/"
        },
        {
            image: "/assets/card1.png",
            icon: "shopping_basket",
            iconColor:"red-text",
            section: "Phisical Product",
            categories: "Marketing Tips Vol1",
            price:"250€",
            url:"/"
        },
        {
            image: "/assets/card1.png",
            icon:"devices",
            iconColor:"green-text",
            section: "Digital Product",
            categories: "Branding Strategy Vol1",
            price:"250€",
            url:"/"
        }
        
        
    ]

    return (
        <div>
            <div className="main row">
                <div className="col s12 m3 "></div>
                <div className="col s12 m9 ">
                    {/* mainbody  */}

                    <div className="row mt-25" >
                        <div className="col s12 ">
                                <div className="grey lighten-5 black-text" style={{
                                    borderRadius:"2px",maxHeight:"165px",
                                    padding:"8px"
                                }}>
                                <div className="pl-25">
                                    <h5 style={{lineHeight:"10px",fontSize:"21px"}}>
                                        <b>Vendors</b>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>  

                    <div className="row mt-25" >
                        <div className="col s12 ">
                            <div className="container"  style={{
                            minHeight: "100px",
                            border: "2px solid #eee",
                            borderRadius:"5px"
                            }}>
                                <div className="container  " style={{
                                   
                                }}>
                                    <div className="row">
                                        <div className="col s12 m3">
                                            <h6 className="grey-text text-lighten-3 "
                                                style={{
                                                    lineHeight: "20px", fontSize: "23px",
                                                paddingBottom:"16px"}}>
                                                <b>Business Name</b>
                                            </h6>
                                            <h6>
                                                <b>Chizom Graphics</b>
                                            </h6>
                                        </div>
                                        <div className="col s12 m3">
                                            <h6 className="grey-text text-lighten-3 "
                                                style={{
                                                    lineHeight: "20px", fontSize: "23px",
                                                paddingBottom:"16px"}}>
                                                <b>Email</b>
                                            </h6>
                                            <h6 className="red-text">
                                                <b>Klaus@mail.com</b>
                                            </h6>
                                        </div>
                                        <div className="col s12 m3">
                                            <h6 className="grey-text text-lighten-3 "
                                                style={{
                                                    lineHeight: "20px", fontSize: "23px",
                                                paddingBottom:"16px"}}>
                                                <b>Phone Number</b>
                                            </h6>
                                            <h6><b>+49782300302</b>  </h6>
                                        </div>
                                        <div className="col s12 m3 right">
                                            <h6 className="grey-text text-lighten-3 "
                                                style={{
                                                    lineHeight: "20px", fontSize: "23px",
                                                paddingBottom:"16px"}}>
                                                <b>Country</b>
                                            </h6>
                                            <h6> <b>Germany</b></h6>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>
                                                    
                    
                    <div className="row mt-25">
                        <div className="col s12"    >
                            <div style={{
                                minHeight: "200px", border: "2px solid #eee",
                                borderRadius:"10px"
                            }}>

                                <div className="col s12 grey lighten-5 p-16" style={{marginTop:"14px"}}>
                                    <div className="pl-25 "> 
                                        <h5 style={{lineHeight:"10px",fontSize:"21px",paddingBottom:"15px"}}>
                                            <b>Products By this Vendor</b>
                                        </h5>
                                    </div>
                                </div>

                                <div className="col s12 transparent lighten-5 p-16" style={{marginTop:"14px"}}>
                                    <div className="pl-25 "> 
                                        <h5 style={{lineHeight:"10px",fontSize:"21px",paddingBottom:"15px"}}>
                                            <b>Total Products
                                             
                                            </b>
                                            <b>
                                                <span className="light-green-text text-accent-1" style={{
                                                    fontSize: "45px",
                                                    padding:"15px 0px 15px 0px !important"
                                                }}>
                                                    {products.length}
                                                </span>
                                            </b>
                                        </h5>
                                    </div>
                                </div>
                                {/* card panel */}

                                    <div className="row p-16">
                                        { products &&
                                            products.map( (item, i) => <div className="col s12 m4"><ProductCard  key={i} item={item} /> </div> )
                                        }
                                        
                                    </div>

                                {/* card panel */}

                            </div>
                        </div>
                    </div>

                    {/* mainbody */}
                </div>
            </div>
        </div>       
        // </div>
    )
}
