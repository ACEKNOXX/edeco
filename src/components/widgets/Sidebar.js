import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from './DrawerNav'

export default function Sidebar() {
    return (
        <div>
            <div className="" >
                <div className="  z-depth-1 hide-on-med-and-up show-on-medium">
                    <nav>
                        <div className="nav-wrapper green">
                        <Link to="/" className="brand-logo">
                            <img src="assets/1.PNG" className="" alt="" />
                        </Link>
                        <button className="btn-flat center transparent">
                            <Drawer />
                        </button>
                       
                        </div>
                    </nav>
                    
                </div>
                <div className="col s12 m3 sidenavnav hide-on-med-and-down green " style={{width:"210px !important",padding:"0px !important"}}>
                    <div className="center" style={{ marginTop: "10px",marginBottom:"-65px" }}>
                        <Link to="/">
                            {/* <img src="assets/1.PNG" className="" alt="" /> */}
                            <div className="sidebarTop col s12"></div>
                        </Link>
                    </div>
                    <div className="collection " style={{padding:"0px !important"}}>
                        <Link to="/" className="black-text collection-item-nav " style={{
                            margin:"0px !important"
                        }}>Categories</Link>
                        <Link to="/Vendors" className="collection-item-nav black-text">Vendors List</Link>
                        <Link to="/" className="black-text collection-item-nav">Create Template</Link>
                        <Link to="/Stats" className="black-text collection-item-nav">Statistics</Link>
                    </div>
                    <div className="col s12 sidebarBottom">
                        
                    </div>
                </div>
                <div className="col s12 m9">

                </div>
            </div>
        </div>
    )
}
