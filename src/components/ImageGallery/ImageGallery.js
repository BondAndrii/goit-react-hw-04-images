import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css"

const ImageGallery = props => 
(<ul className="ImageGallery">
    {props.echo.map(e => 
        <ImageGalleryItem echo={e} />
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