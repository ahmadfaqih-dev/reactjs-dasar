import React, { Component } from 'react'

export default class FormInput extends Component {

    state = {
        nama: "Faqih",
        alamat: "Tegal",
        mobil: "Fortuner",
        kelamin: "Laki laki"
    }

    handleChange = e => {
        this.setState ({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div>
                <div>
                    <p>Nama Saya : {this.state.nama}</p>
                    <input type="text" name="nama" value={this.state.nama} onChange={this.handleChange}/>
                </div>
                <p>Mobil Saya : {this.state.mobil}</p>
                <select type="radio" name="mobil" value={this.state.mobil} onChange={this.handleChange}>
                    <option value="fortuner">Fortuner</option>
                    <option value="alpard">Alpard</option>
                    <option value="mersi">Mersi</option>
                    <option value="lexus">Lexus</option>
                </select>
                <p>Jenis Kelamin : {this.state.kelamin}</p>
                <input type="radio" name="kelamin" value="Laki laki" onChange={this.handleChange} checked={this.state.kelamin === 'Laki laki' ? true : false} ></input>
                <input type="radio" name="kelamin" value="Perempuan" onChange={this.handleChange} checked={this.state.kelamin === 'Perempuan' ? true : false} ></input>
                
            </div>
        )
    }
}
