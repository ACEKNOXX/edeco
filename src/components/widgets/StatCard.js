import React from 'react'

export default function StatCard(props) {
     const datas = props.datas
    return (
        <div className="green white-text mt-25" style={{
            borderRadius:"10px",minHeight:"125px",
            padding: "8px 16px"}}>
            <div>
                <span style={{
                    
                    fontSize:"18px",
                    lineHeight:"15px"
                }}>
                    {datas.title}
                </span>
                <br/>
                <span style={{ fontWeight: "bold", fontSize: "35px" }}>
                    {datas.value}
                </span>
            </div>
            {datas.url &&
                <button type="button" className="btn-flat center transparent white-text"
                    style={{border:"1px solid #eee",borderRadius:"12px"}}>
                    View Stat
                </button>
            }
            
        </div>
    )
}
