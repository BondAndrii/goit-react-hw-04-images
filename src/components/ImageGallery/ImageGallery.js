import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css"

const ImageGallery = props => 
(<ul className="ImageGallery">
    {props.echo.map(e => 
        <ImageGalleryItem key={e.id} item={e} onClick={props.onClick} />
    )}   
</ul>)

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