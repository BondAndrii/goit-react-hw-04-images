import React from "react";

const ImageGallery = props => 
(<ul>
    {props.echo.map(e =>
    (<li>
        <img src={e.previewURL} alt={e.tags} />
    </li>))}   
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