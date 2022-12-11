import { Component } from "react";
// import { ToastContainer } from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";
import './styles.css'
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal";



export default class App extends Component {
  state = {
    searchName: '',
    image: null,
    forModal: "",  
    loading: false,
    showModal: false,
    page:1,
  }
  async componentDidUpdate(prevProps, prevState) {
    const {searchName, page} = this.state
    const key = '28720978-48527d1c9d73f1bfd555e68c2'
    if (prevState.searchName !== this.state.searchName || prevState.page !== this.state.page)
    try {
      this.setState({ loading: true })// Взводим умову для загрузки лоадера
      await fetch(`https://pixabay.com/api/?q=${searchName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json()).then(result => {
          this.setState({
            image: result.hits, // записуємо в стейт отриманий массив з сервера
            loading: false,// відпускаємо лоадер 
          });
          console.log("log in fetch", this.state.image);
        });
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
  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // }
  handleClickImg = forModal => {
    console.log("приход с итема", forModal);
    this.setState({
      forModal,
      showModal: true,
    })
    
    console.log("after click", this.state);
    
  }
  // {
  //   this.setState(
  //     {
  //       largeImage: largeImage,
  //       showModal: true,
  //     });
  //   console.log("handleClickImg", this.state);
  // }
  render() {
    const { loading, image, showModal,} = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <div>Грузимся</div>}
        {image && <ImageGallery echo={this.state.image} onClick={this.handleClickImg} />}
        {image && <Button onClick={this.handleButton} />}
        {showModal &&
          <Modal forRender={this.state.forModal}/>            
          
        }
      </div>
    );
  };
};

