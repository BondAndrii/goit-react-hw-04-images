import React, {Component} from "react";
import '../styles.css'
// import './Searchbar.css'


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
        <header class="Searchbar">
            <form onSubmit={this.handleSubmit } class="SearchForm ">
                <button type="submit" class="SearchForm-button">
                    <span class="button">Search</span>
                </button>

                <input
                    onChange={this.handleInput}
                    class="SearchForm-input "
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
