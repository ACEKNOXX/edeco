import React from 'react'

export default function StatCard() {
    return (
        <div className="green white-text mt-25" style={{
            borderRadius:"10px",maxHeight:"165px",
            padding: "8px 16px"}}>
            <div>
                <span style={{
                    
                    fontSize:"25px",
                    lineHeight:"15px"
                }}>
                    <b>Total Sales</b>
                </span>
                <br/>
                <span style={{fontWeight:"bold",fontSize:"45px"}}>2300</span>
            </div>
            <button type="button" className="btn-flat center transparent white-text"
                style={{border:"1px solid #eee",borderRadius:"12px"}}>
                View Stat
            </button>
        </div>
    )
}
