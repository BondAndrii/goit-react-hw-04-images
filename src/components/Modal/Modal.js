import { render } from "@testing-library/react";
import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";


const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    state = {
        largeImage: '',
        showModal: false,
    }
    // viz = () => console.log(this.state.largeImage);
    componentDidMount() {
        this.setState({
            largeImage: this.props.echo,
        })
    }
    componentDidUpdate(prevState) {
        if (this.state.largeImage !== prevState.largeImage) {
            this.setState(prevState => ({
                largeImage:"",
                showModal:true,
            }))
            console.log("in modal", this.state )
        }
            
    }
    
    render() {
        return createPortal(
            <div className="Overlay">
                <div className="Modal"> 
                    {this.props.children}
                    {/* <h1>Кликнулось</h1>     */}
                    {/* <img src="" alt="" /> */}
                </div>
            </div>, 
            modalRoot
        )
    }
}


export default Modal;