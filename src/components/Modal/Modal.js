
import React from "react";
// import { Component } from "react";
// import { useState } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import "./Modal.css";


const modalRoot = document.querySelector('#modal-root');

export default function Modal({forRender, onClose}) {
    // const [largeImage, setLargeImage] = useState('');
    // const [alt, setAlt] = useState('');
    const { largeImageURL, alt } = forRender;
    useEffect(() => {
        // setLargeImage(forRender.largeImageURL);
        // setAlt(forRender.tags);
        const handleKeyDown = e => {
        // console.log("handleKeyDown", handleKeyDown)
            if (e.code === 'Escape') {
                console.log(e.code);
                onClose();
            }
    }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    },[ onClose])
    
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }
    return createPortal(
        <div className="Overlay" onClick={handleBackdropClick}>
            <div className="Modal">
                {/* {this.props.children} */}
                <img src={largeImageURL} alt={alt} />
                {/* <button type="button" onClick={this.props.onClose}>жми</button> */}
            </div>
        </div>,
        modalRoot
    );

}
//------------------CLASS-------------------CLASS------------------CLASS-----------------//
// class Modal extends Component {
//     state = {
//         largeImage: '',
//         alt: '',        
//     }
    
//     componentDidMount() {
//         const { largeImageURL, tags } = this.props.forRender;
//         this.setState({
//             largeImage: largeImageURL,
//             alt: tags,
//         });
//         window.addEventListener('keydown', this.handleKeyDown)
//     }
//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleKeyDown)
        
//     }
//     handleKeyDown = e => {
//             if (e.code === 'Escape') {
//                 console.log(e.code);
//                 this.props.onClose();
//             }
//     }
//     handleBackdropClick = e => {
//         if (e.currentTarget === e.target) {
//             this.props.onClose();
//         }
//     }
//     render() {
//         const { largeImage, alt } = this.state;
//         return createPortal(
//             <div className="Overlay" onClick={this.handleBackdropClick}>
//                 <div className="Modal"> 
//                     {/* {this.props.children} */}                    
//                     <img src={largeImage} alt={alt} />
//                     {/* <button type="button" onClick={this.props.onClose}>жми</button> */}
//                 </div>
//             </div>, 
//             modalRoot
//         )
//     };
// }


// export default Modal;

Modal.propTypes = {
    forRender: PropTypes.object,
    onClose: PropTypes.func,
}