import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        angka: 0
    };

    tambah = () => {
        this.setState(prevState => ({
            angka: prevState.angka + 1
        }));
    };

    kurang = () => {
        this.setState(prevState => ({
            angka: prevState.angka ===0? prevState.angka :prevState.angka - 1

        }));

    };


    render() {
        return (
            <div>
                <p>{this.state.angka}</p>
                <button onClick={this.tambah}>Tambah</button>
                <button onClick={this.kurang}>Kurang</button>
            </div>
        )
    }
}
