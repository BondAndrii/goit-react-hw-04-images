import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

const ImageGallery = props => 
(<ul>
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