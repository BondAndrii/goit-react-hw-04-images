import { Component } from "react";
// import { ToastContainer } from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader";
import Button from "./Button";
import ImageGallery from "./ImageGallery";
import Modal from "./Modal";
import './styles.css'

export default class App extends Component {
  state = {
    searchName: '',
    images: [],
    forModal: {},
    page: 1,
    loading: false,
    showModal: false,
    showBtn: false,
    status: 'idle',
  } 
  async componentDidUpdate(prevProps, prevState) {
    const { searchName, page, images} = this.state;
    const key = '28720978-48527d1c9d73f1bfd555e68c2';       
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
                        images: [...images, ...imagesList],
                        status: 'resolved',
                    })
              }
              const totalHits = imagesData.totalHits
              const maxPage = Math.ceil(totalHits / 12)
              if (page < maxPage  ) {
                this.setState({
                  showBtn: true,
                })
              }
              else {
                this.setState({
                  showBtn: false,
                })
              }
              console.log("in fetch", maxPage) 
            
            } catch (error) {
                alert(error);
            }
        }
  handleSubmit = (searchName) => {    
    this.setState({
      searchName,// отримуємо ім'я пошукового слова з searchbar
      images: [],
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
    
    // console.log("after click", this.state);
    
  }
  render() {
    const { images, showModal, forModal, status, showBtn} = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        {status === 'idle' && <h2>Введіть, щоб ви хотіли побачити...</h2>}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h2>Нажаль, нічого не знайшли</h2>}
        {status === 'resolved' && <ImageGallery images={images} onClick={this.handleClickImg}/>}
        {/* <ImageGallery images={images} onClick={this.handleClickImg} /> */}
        {showBtn && <Button onClick={this.handleButton} /> }
        {showModal && <Modal forRender={forModal} onClose={this.toggleModal} />}
      </div>
    );
  };
};

