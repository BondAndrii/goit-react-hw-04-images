import React from "react";

const ImageGalleryItem = (props) => (
    // console.log(props)
    (<li>
        <img src={props.echo.previewURL} alt={props.echo.tags} />
    </li>)
)

export default ImageGalleryItem;