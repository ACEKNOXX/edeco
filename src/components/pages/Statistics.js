import React from 'react'
import Graph from './../widgets/GraphChart'
import DataSelectRange from './../widgets/DataSelectRange'
import SalesTable from './../widgets/SalesTable'
import StatCard from './../widgets/StatCard'
import ProductTable from './../widgets/ProductTable'

export default function Statistics() {
    var stats = [
        {
            title: "Total Sales",
            value: "2500",
            url:"/"
        },
        {
            title: "Total Customers",
            value: "30",
            url:"/"
        },
        {
            title: "Total Orders",
            value: "5000",
            url:"/"
        },
        {
            title: "Total Income",
            value: "2500€",
        }
        
    ]
    return (
          <div>
            <div className="main row">
                <div className="col s12 m3 "></div>
                <div className="col s12 m9 ">
                    {/* mainbody  */}

                    
                    <div className="row mt-25">
                        {/* <div className="col s12"> */}
                            { stats &&
                                stats.map( (item, i) => <div className="col s12 m3"><StatCard  key={i} datas={item} /> </div> )
                            }
                        {/* </div> */}
                    </div>
                        
                    <div className="row mt-25">
                        <div className="col s12">
                            <div style={{
                                width:"100$",
                                minHeight: "70px", border: "2px solid #eee",
                                borderRadius:"10px"
                            }}>
                                <DataSelectRange />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row mt-25" >
                        <div className="col s12 ">
                                <div className="grey lighten-5 black-text" style={{
                                    borderRadius:"2px",maxHeight:"165px",
                                    padding:"8px"
                                }}>
                                <div className="pl-25">
                                    <h5 style={{lineHeight:"10px",fontSize:"21px"}}>
                                        <b>Sales Performance</b>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-25">
                        <div className="col s12 m6">
                            <Graph />
                        </div>
                        <div className="col s12 m6">
                            <ProductTable />
                        </div>
                    </div>
                    <div className="row mt-25">
                        <div className="col s12">
                            <SalesTable />
                        </div>
                    </div>
                    {/* mainbody */}
                </div>
            </div>
        </div>       

    )
}
