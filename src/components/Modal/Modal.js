
import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";


const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    state = {
        largeImage: '',
        alt: '',
        showModal: false,
    }
    // viz = () => console.log(this.state.largeImage);
    componentDidMount() {
        this.setState({
            largeImage: this.props.forRender.largeImageURL,
            alt: this.props.forRender.tags,
            showModal: true,

        })
        console.log("in modal", this.state)
    }
    // componentDidUpdate(prevState) {
    //     if (this.state.largeImage !== prevState.largeImage) {
    //         this.setState(prevState => ({
    //             largeImage:"",
    //             showModal:true,
    //         }))
    //         console.log("in modal", this.state )
    //     }
            
    // }
    
    render() {
        return createPortal(
            <div className="Overlay">
                <div className="Modal"> 
                    {/* {this.props.children} */}
                    {/* <h1>Кликнулось</h1>     */}
                    <img src={this.state.largeImage} alt={this.state.tags} />
                </div>
            </div>, 
            modalRoot
        )
    };
}


export default Modal;