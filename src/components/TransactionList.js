import React from 'react'

export const TransactionList = () => {
    return (
        <>
           <h3>Historia</h3>
           <ul className="list">
                <li className="minus">
                    Efectivo <span>-$15.000</span><button className="delete-btn">x</button>
                </li>   
            </ul> 
        </>
    )
}
