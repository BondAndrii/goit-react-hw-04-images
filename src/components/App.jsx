import { Component } from "react";
// import { ToastContainer } from "react-toastify";


import Searchbar from "./Searchbar/Searchbar";
import './styles.css'
import ImageGallery from "./ImageGallery/ImageGallery";

export default class App extends Component {
  state = {
    searchName: '',   
  }    
  handleSubmit = (searchName) => {    
    this.setState({
      searchName, // отримуємо ім'я пошукового слова з searchbar
    });    
  }
 
  render() {
    const { searchName} = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchName={searchName} onClick={this.handleClickImg} /> 
      </div>
    );
  };
};

