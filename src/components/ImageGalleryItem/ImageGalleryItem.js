import React from "react";
import './ImageGalleryItem.css'

const ImageGalleryItem = (props) =>
    // console.log(props);
    (<li className="ImageGalleryItem">
    <img
        className="ImageGalleryItem-image"        
        id={props.item.id}
        src={props.item.previewURL}
        alt={props.item.tags}
        onClick={() => props.onClick(props.item)}
    />
    </li>);
    


export default ImageGalleryItem;