import React from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem";
import { BallTriangle } from "react-loader-spinner";
import "./ImageGallery.css";

const ImageGallery = ({status, images, onClick }) => {    
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
                <ul className="ImageGallery">                
                    {images.map(image => (
                        <ImageGalleryItem key={image.id} item={image} onClick={onClick} />
                    ))}                   
                </ul>
                    
            )
        }
}
export default ImageGallery;

ImageGallery.propTypes = {
    status: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,

}

