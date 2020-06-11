import React, {Component} from 'react';
import './App.css';

export default class TodoListApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            inputValue: ''
        };
    }

    handleAddClick = () => {
        this.setState({
            list: this.state.list.concat(this.state.inputValue),
            inputValue: ''
        });
    }

    handleInputChange = ev => {
        this.setState({
            inputValue: ev.target.value
        });
    }

    handleRemoveItem = (item) => {
        const newList = this.state.list.filter(i => i !== item);

        // const newList = this.state.list.filter(function (i) {
        //     return i !== item;
        // });

        this.setState({
            list: newList
        });
    }

    render() {
        return (
            <div className="App">
                <div className='add-new-item'>
                    <input type="text" placeholder="Enter text" value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button onClick={this.handleAddClick}>Add</button>
                </div>
                <div className='todoList'>
                    <ul>
                        {this.state.list.map(item => <li key={item}>{item} <button onClick={() => this.handleRemoveItem(item)}>x</button></li>)}
                    </ul>
                </div>
            </div>
        );
    }
}