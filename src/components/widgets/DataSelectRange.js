import React from 'react'
import DropDownButton from './DropDownButton'
import DropDownButton1 from './DropDownButton1'



export default function DataSelectRange() {
    return (
        <div className="p-25">
            <div className="col s12 m6 ">
                <div className="col s12 m8">
                    <DropDownButton />
                </div>
                <div className="col s12 m4 ">
                    <button className="btn-flat green center white-text"
                        style={{
                            marginTop:"11px",
                            borderRadius: "10px",
                            height: "45px",
                            width: "100px",
                            textTransform:"none"

                        }}>Sort</button>
                </div>
            </div>
            <div className="col s12 m6">
                <div className="col s12 m9">
                    <DropDownButton1 />
                </div>
            </div>
        </div>
    )
}
