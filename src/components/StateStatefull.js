import React, { Component } from 'react'

export default class StateStatefull extends Component {
    state = {
        nama: 'Ahmad Faqih',
        alamat: 'tegal',
        umur: 25
    }
    
    render() {
        return (
            <div>
                <h4>Nama : {this.state.nama}</h4>
                <p>Alamat : {this.state.alamat}</p>
                <p>Umur : {this.state.umur}</p>
            </div>
        )
    }
}


// State penulisannya harus dilakukan di statefull component