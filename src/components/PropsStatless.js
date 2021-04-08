import React from 'react'

export const PropsStatless = (props) => {
    return (
        <div>
            <div>
                <h1>Nama : {props.nama}</h1>
                <h2>Alamat : {props.alamat}</h2>
                <div>{props.hobi}</div>
                <div>{props.portfolio}</div>
            </div>
        </div>
    )
}
