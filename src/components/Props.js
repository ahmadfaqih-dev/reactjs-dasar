import React, { Component } from 'react'

class Props extends Component {
    render() {
        return (
            <div>
                <h1>Nama : {this.props.nama}</h1>
                <h2>Alamat : {this.props.alamat}</h2>
                <div>{this.props.hobi}</div>
                <div>{this.props.portfolio}</div>
            </div>
        )
    }
}

export default Props;
