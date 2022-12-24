import React from "react";
// import { Component } from "react";
import {useState } from "react";
import PropTypes from 'prop-types';

import '../styles.css'

// import './Searchbar.css'

export default function Searchbar(priSubmit) {
    const [searchName, setSearchName] = useState('');
    const handleInput = e => {
        setSearchName(e.currentTarget.value.toLowerCase());
        console.log("в інпуті", searchName);
        // this.setState({ searchName: e.currentTarget.value.toLowerCase() })
    };
    console.log(priSubmit);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("searshName при сабмите раз", searchName);
        if (searchName.trim() === '') {
            alert('Please enter name for search');            
            return;
        }
        console.log("searshName при сабмите", searchName)
        priSubmit(searchName);
        // return searchName;
        
        setSearchName('');
        
    }
    return (
        <header className="Searchbar">
            <form onSubmit={handleSubmit } className="SearchForm ">
                <button type="submit" className="SearchForm-button">
                    <span >Search</span>
                </button>

                <input
                    onChange={handleInput}
                    className="SearchForm-input "
                    type="text"
                    value={searchName}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                
            </form>
        </header>
    )
} 



//------------------CLASS-------------------CLASS------------------CLASS-----------------//
// class Searchbar extends Component { 
//     state = {
//         searchName: '',
//     }
//     handleInput = e => {
//         this.setState({ searchName: e.currentTarget.value.toLowerCase() })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         if (this.state.searchName.trim() === '') {
//             alert('Please enter name for search');            
//             return;
//         }
//         this.props.priSubmit(this.state.searchName);
//         // console.log("searshName при сабмите", this.state.searshName);
//         this.setState ({ searchName: '' });
//     }
//     render() {
//         console.log("searshName в рендері", this.state.searshName);
//     return (
//         <header className="Searchbar">
//             <form onSubmit={this.handleSubmit } className="SearchForm ">
//                 <button type="submit" className="SearchForm-button">
//                     <span >Search</span>
//                 </button>

//                 <input
//                     onChange={this.handleInput}
//                     className="SearchForm-input "
//                     type="text"
//                     value={this.state.searchName}
//                     autoComplete="off"
//                     autoFocus
//                     placeholder="Search images and photos"
//                 />
                
//             </form>
//         </header>
//     )
// }
// }
// export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}