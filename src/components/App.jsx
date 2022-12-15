import { Component } from "react";
// import { ToastContainer } from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";
import Button from "./Button";
import ImageGallery from "./ImageGallery";
import Modal from "./Modal";
import './styles.css'

export default class App extends Component {
  state = {
    searchName: '',
    images: null,
    forModal: {},
    page: 1,
    loading: false,
    showModal: false,
    showBtn: false,
    status: 'idle',
  } 
  async componentDidUpdate(prevProps, prevState) {
        const { searchName, page, showBtn} = this.state;
        const key = '28720978-48527d1c9d73f1bfd555e68c2';    
    // console.log("in Gallery", this.props.searchName, this.state);
        if (prevState.searchName !== searchName || prevState.page !== page)
            try {
                this.setState({ status: 'pending' })// Взводим умову для загрузки лоадера
                const fetchRespons = await fetch(`https://pixabay.com/api/?q=${searchName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
                const imagesData = await fetchRespons.json();
                const imagesList = imagesData.hits;
                if (imagesList.length === 0) {
                    this.setState({
                        status: 'rejected'
                    })                    
                }
                else {
                    this.setState({
                        images: imagesList,
                        status: 'resolved',
                    })
              }
              if (imagesList.length === 12) {
                this.setState({
                  showBtn: true,
                })
              }
              else {
                this.setState({
                  showBtn: false,
                })
              }
              console.log("in fetch", imagesData.totalHits) 
            
            } catch (error) {
                alert(error);
            }
        }
  handleSubmit = (searchName) => {    
    this.setState({
      searchName, // отримуємо ім'я пошукового слова з searchbar
    });    
  }
 handleButton = (prevState) => {
    this.setState(prevState => ({
      page: prevState.page +1,// при натисканні кнопки збільшуємо номер сторінки на 1
    }))    
  }
  toggleModal = () => this.setState({
    showModal: !this.state.showModal,
  })
  handleClickImg = forModal => {
    // console.log("приход с итема", forModal);
    this.setState({
      forModal,
      showModal:true,
    })
    
    console.log("after click", this.state);
    
  }
  render() {
    const { images, showModal, forModal, status, showBtn} = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery status={status} images={images} onClick={this.handleClickImg} />
        {showBtn && <Button onClick={this.handleButton} /> }
        {showModal && <Modal forRender={forModal} onClose={this.toggleModal} />}
      </div>
    );
  };
};

