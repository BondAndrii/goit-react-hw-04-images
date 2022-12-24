// import { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { ToastContainer } from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader";
import Button from "./Button";
import ImageGallery from "./ImageGallery";
import Modal from "./Modal";
import picturesApi from '../services/api'
import './styles.css'


export default function App() {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [forModal, setForModal] = useState({});
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [status, setStatus] = useState('idle');
  // const [error, setError] = useState(null);
  
  useEffect(() => {
    if (searchName === '') {
      return
    }
    setStatus('pending')
    picturesApi.fetchPictures(searchName, page)
      .then(data => {
        const imagesList = data.hits;
        const totalHits = data.totalHits;
        if (imagesList.length === 0) {
          setStatus('rejected')
          // this.setState({
          //     status: 'rejected'
          // })                    
        }
        else {
          setImages(images => [...imagesList, ...images]);
          setStatus('resolved');
          // this.setState({
          //     images: [...imagesList, ...images ],
          //     status: 'resolved',
          // })
        }
        const maxPage = Math.ceil(totalHits / 12)
        if (page < maxPage) {
          setShowBtn(true)
          // this.setState({
          //   showBtn: true,
          // })
        }
        else {
          setShowBtn(false)
          // this.setState({
          //   showBtn: false,
          // })
        }
      })
      .catch(error => error.message);
        // this.setState({ error })
      

  }, [searchName, page]);
  const handleButton = () => {
    setPage(page => page + 1);   
  }
  const toggleModal = () => setShowModal(showModal => !showModal);
  
  const handleClickImg = forModal => {
    setForModal(forModal);
    setShowModal(true);
  }
 
  const handleAppSubmit = searchName => {
    setSearchName(searchName);
    setImages([]);
  }
 
    return (
          <div className="App">
            <Searchbar priSubmit={handleAppSubmit} />
            {status === 'idle' && <h2>Введіть, щоб ви хотіли побачити...</h2>}
            {status === 'pending' && <Loader />}
            {status === 'rejected' && <h2>Нажаль, за запитом нічого не знайшли</h2>}
            {status === 'resolved' && <ImageGallery images={images} onClick={handleClickImg}/>}        
            {showBtn && <Button onClick={handleButton} /> }
            {showModal && <Modal forRender={forModal} onClose={toggleModal} />}
          </div>
        );
}
//------------------CLASS-------------------CLASS------------------CLASS-----------------//
// export default class App extends Component {
//   state = {
//     searchName: '',
//     images: [],
//     forModal: {},
//     page: 1,
//     // loading: false,
//     showModal: false,
//     showBtn: false,
//     status: 'idle',   
//     error: null,
//   } 
//   async componentDidUpdate(prevProps, prevState) {
//     const {searchName, page, images} = this.state;         
//         if (prevState.searchName !== searchName || prevState.page !== page)
//             try {
//               this.setState({ status: 'pending' })              
//               picturesApi.fetchPictures(searchName, page)
//                 .then(data => {
//                       const imagesList = data.hits;
//                       const totalHits = data.totalHits;
//                       if (imagesList.length === 0) {
//                           this.setState({
//                               status: 'rejected'
//                           })                    
//                       }
//                       else {
//                           this.setState({
//                               images: [...imagesList, ...images ],
//                               status: 'resolved',
//                           })
//                       }
//                       const maxPage = Math.ceil(totalHits / 12)
//                       if (page < maxPage  ) {
//                       this.setState({
//                         showBtn: true,
//                       })
//                       }
//                       else {
//                       this.setState({
//                         showBtn: false,
//                       })
//                       }
//                 })
//                 .catch(error => this.setState({ error }))                                         
//                 } catch (error) {
//                     alert(error);
//                   }
//   }

//  handleButton = (prevState) => {
//     this.setState(prevState => ({
//       page: prevState.page +1,// при натисканні кнопки збільшуємо номер сторінки на 1
//     }))    
//   }
//   toggleModal = () => this.setState({
//     showModal: !this.state.showModal,
//   })
//   handleClickImg = forModal => {
//     this.setState({
//       forModal,
//       showModal:true,
//     }) 
// }
  
//   handleAppSubmit = (searchName) => {    
//     this.setState({
//       searchName,// отримуємо ім'я пошукового слова з searchbar
//       images: [],
//     });    
//   }
//   render() {
//     const { images, showModal, forModal, status, showBtn} = this.state;
//     return (
//       <div className="App">
//         <Searchbar priSubmit={this.handleAppSubmit} />
//         {status === 'idle' && <h2>Введіть, щоб ви хотіли побачити...</h2>}
//         {status === 'pending' && <Loader />}
//         {status === 'rejected' && <h2>Нажаль, за запитом нічого не знайшли</h2>}
//         {status === 'resolved' && <ImageGallery images={images} onClick={this.handleClickImg}/>}        
//         {showBtn && <Button onClick={this.handleButton} /> }
//         {showModal && <Modal forRender={forModal} onClose={this.toggleModal} />}
//       </div>
//     );
//   };
// };

