import React from 'react'

export default function MainBody(props) {
    const body = props.mainBody

    return (
       
        <div className="main row">
            <div className="col s12 m3 "></div>
            <div className="col s12 m9 ">
                <div className="container " >
                    sss
                    {body}                    
                </div>
            </div>

        
        </div>
   
    )
}
