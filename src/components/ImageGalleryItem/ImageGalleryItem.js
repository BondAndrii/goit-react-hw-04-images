import React from "react";
import './ImageGalleryItem.css'

const ImageGalleryItem = (props) => (
    // console.log(props)
    (<li className="ImageGalleryItem">
        <img className="ImageGalleryItem-image" src={props.echo.previewURL} alt={props.echo.tags} />
    </li>)
)

export default ImageGalleryItem;