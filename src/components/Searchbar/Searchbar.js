import React, {Component} from "react";
import './Searchbar.css'

class Searchbar extends Component { 
    state = {
        searshName: '',
    }
    handleInput = e => {
        this.setState({ searshName: e.currentTarget.value.toLowerCase() })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searshName);
        console.log("searshName при сабмите", this.state.searshName)
    }
    render() {
        console.log("searshName в рендері", this.state.searshName);
    return (
        <header class="searchbar">
            <form onSubmit={this.handleSubmit }class="form">
                <button type="submit" class="button">
                    <span class="button-label">Search</span>
                </button>

                <input
                    onChange={this.handleInput}
                    class="input"
                    type="text"
                    value={this.state.searshName}
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}
}
export default Searchbar;
