import React, {Component} from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";
import { BallTriangle } from "react-loader-spinner";
import "./ImageGallery.css"

class ImageGallery extends Component {
    state = {
        searchName: '',
        page: 1,
        images: [],
        loading: false,
        status: 'idle',
        
    }
    // 'idle'
    // 'pending'
    // 'resolved'
    // 'rejected'
    async componentDidUpdate(prevProps, prevState) {
        const { searchName, page } = this.state;
        const key = '28720978-48527d1c9d73f1bfd555e68c2';
        
        
        this.setState({
            searchName:this.props.searchName,
        })
        // console.log("in Gallery", this.props.searchName, this.state);
        if (prevState.searchName !== searchName || prevState.page !== page)
        try {
        this.setState({ status: 'pending' })// Взводим умову для загрузки лоадера
        await fetch(`https://pixabay.com/api/?q=${searchName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json()).then(result => 
                this.setState({
                    images: result.hits,
                    status: 'resolved',
                }))// записуємо в стейт отриманий массив що приніс запит на сервер

            .finally(() => this.setState({ loading: false, }))        
            } catch (error) {
        alert(error);
        }
    }
    handleButton = (prevState) => {
    this.setState(prevState => ({
      page: prevState.page +1,// при натисканні кнопки збільшуємо номер сторінки на 1
    }))    
  }
    render() {
        const { images, status } = this.state;
        if (status === 'idle') {
            return <h2>Щоб Ви хотіли побачити?..</h2>
        }
        if (status === 'pending') {
            return <BallTriangle
                            // className="Spiner"
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                    />
        }
        if (status === 'rejected') {
            return <h2>Відчепись! Нема такого!</h2>
        }
        if (status === 'resolved'){
        return (
            <ul className="ImageGallery">                
                {images.map(image => (
                    <ImageGalleryItem key={image.id} item={image} onClick={this.props.onClick} />
                ))}
                {images && <Button onClick={this.handleButton} />}                    
        </ul>)
    }}
}
// const ImageGallery = props => 
// (<ul className="ImageGallery">
//     {props.echo.map(e => 
//         <ImageGalleryItem key={e.id} item={e} onClick={props.onClick} />
//     )}   
// </ul>)

// (
//     <ul >
//         {echo.map(e => (
//             <li >
//                 <img src={e.previewImage} alt="mhvnv" />
//             </li>
//         ))}
//     </ul>
// );

export default ImageGallery;