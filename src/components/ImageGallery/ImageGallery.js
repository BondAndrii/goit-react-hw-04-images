import React, { Component } from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem";
import Button from "components/Button";
import { BallTriangle } from "react-loader-spinner";
import Modal from "components/Modal";
import "./ImageGallery.css"

class ImageGallery extends Component {
    state = {
        searchName: '',
        page: 1,
        images: null,
        loading: false,
        forModal: {},
        status: 'idle',
        showModal: false,        
    }
    // 'idle'
    // 'pending'
    // 'resolved'
    // 'rejected'
    // 'modal'
    async componentDidUpdate(prevProps, prevState) {
        const { searchName, page, } = this.state;
        const key = '28720978-48527d1c9d73f1bfd555e68c2';
        
        
        this.setState({
            searchName: this.props.searchName,
        })
        // console.log("in Gallery", this.props.searchName, this.state);
        if (prevState.searchName !== searchName || prevState.page !== page)
            try {
                this.setState({ status: 'pending' })// Взводим умову для загрузки лоадера
                const fetchRespons = await fetch(`https://pixabay.com/api/?q=${searchName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
                const imagesData = await fetchRespons.json();
                const imagesList = imagesData.hits;
                if (imagesList.length === 0) {
                    this.setState({
                        status: 'rejected'
                    })
                    
                }
                else {
                    this.setState({
                        images: imagesList,
                        status: 'resolved',
                    })
                }
                // console.log("in fetch", imagesList .length) 
            
            } catch (error) {
                alert(error);
            }
        }
    
    handleButton = (prevState) => {
    this.setState(prevState => ({
      page: prevState.page +1,// при натисканні кнопки збільшуємо номер сторінки на 1
    }))    
    }
    handleClickImg = forModal => {
    // console.log("приход с итема", forModal);
    this.setState({
      forModal,
      showModal:true,
    })
    
    console.log("after click", this.state);
    
  }
    toggleModal = () => this.setState({
    showModal: !this.state.showModal,
  }) 
    render() {
        const { images, status, showModal, forModal } = this.state;
        if (status === 'idle') {
            return <h2>Введіть, щоб ви хотіли побачити...</h2>
        }
        if (status === 'pending') {
            return <BallTriangle
                            // className="Spiner"
                    height="380"
                    width="380"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                    />
        }
        if (status === 'rejected') {
            return <h2>Нажаль, нічого не знайшли</h2>
        }
        if (status === 'resolved'){
            return (
            <div className="Container">
                <ul className="ImageGallery">                
                    {images.map(image => (
                        <ImageGalleryItem key={image.id} item={image} onClick={this.handleClickImg} />
                    ))}                    
                    </ul>
                    <Button onClick={this.handleButton} /> 
                    {showModal && <Modal forRender={forModal} onClose={this.toggleModal} />}
            </div>)
    }}
}

export default ImageGallery;

ImageGallery.propTypes = {
    searchName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}