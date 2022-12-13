import { Component } from "react";
// import { ToastContainer } from "react-toastify";

import { BallTriangle } from "react-loader-spinner";
import Searchbar from "./Searchbar/Searchbar";
import './styles.css'
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal";



export default class App extends Component {
  state = {
    searchName: '',
    image: null,
    forModal: {},  
    loading: false,
    showModal: false,
    page:1,
  }    
  handleSubmit = (searchName) => {    
    this.setState({
      searchName, // отримуємо ім'я пошукового слова з searchbar
    });    
  }
   handleClickImg = forModal => {
    // console.log("приход с итема", forModal);
    this.setState({
      forModal,
      showModal: true,
    })
    
    console.log("after click", this.state);
    
  }
  toggleModal = () => this.setState({
    showModal: !this.state.showModal,
  }) 
  render() {
    const { loading, image, showModal, forModal, searchName} = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchName={searchName} onClick={this.handleClickImg} />
        {/* {loading && <BallTriangle
          // className="Spiner"
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>} */}
        {/* {image && <ImageGallery echo={image} onClick={this.handleClickImg} />} */}
        
        {/* {image && <Button onClick={this.handleButton} />} */}
        {showModal && <Modal forRender={forModal} onClose={this.toggleModal} />}
        
      </div>
    );
  };
};

