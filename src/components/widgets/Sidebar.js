import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <div>
            <div className="row">
                <div className=" col m2 sidenavnav hide-on-med-and-down   green " style={{padding:"0px !important"}}>
                    <div className="center" style={{marginTop:"50px",marginBottom:"50px"}}>
                        <img src="1.PNG" className="" alt="" />
                    </div>
                    <div className="collection ">
                        <Link to="/" className="collection-item">Categories</Link>
                        <Link to="/" className="collection-item ">Vendors List</Link>
                        <Link to="/" className="collection-item">Create Template</Link>
                        <Link to="/" className="collection-item">Statistics</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
