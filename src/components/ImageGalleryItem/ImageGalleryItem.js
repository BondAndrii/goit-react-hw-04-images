import React from "react";
import './ImageGalleryItem.css'

const ImageGalleryItem = (props) =>
    // console.log(props.echo);
    (<li className="ImageGalleryItem">
    <img
        className="ImageGalleryItem-image"        
        id={props.echo.id}
        src={props.echo.previewURL}
        alt={props.echo.tags}
        onClick={() => props.onClick(props.echo)}
    />
    </li>);
    


export default ImageGalleryItem;