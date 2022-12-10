import { Component } from "react";
// import { ToastContainer } from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";
import './styles.css'
import ImageGallery from "./ImageGallery/ImageGallery";



export default class App extends Component {
  state = {
    searchName: '',
    image: null,
    previewImage: [],
    
    loading: false,
    page:1,
  }
  async componentDidUpdate(prevProps, prevState) {
    const {searchName, page} = this.state
    const key = '28720978-48527d1c9d73f1bfd555e68c2'
    if (prevState.searchName !== this.state.searchName)
    try {
      this.setState({ loading: true })
      await fetch(`https://pixabay.com/api/?q=${searchName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json()).then(result => {
          this.setState({
            image: result.hits,
            loading: false,
          });
          console.log("log in fetch", this.state.image);

        });
      
      
         
    } catch (error) {
      alert(error);
    }
  } 
  
  handleSubmit = (searchName) => {    
    this.setState({
      searchName,
    });
    console.log("name", this.state.searchName)
  }

  render() {
    const { loading, image } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <div>Грузимся</div>}
        {image && <ImageGallery echo={this.state.image} />}
        {/* {image && image.map(picture => (
        <li >
          <img src={picture.largeImageURL} alt="kjbkjb" />
        </li>
          
        ))
         
        } */}
        
      </div>
    );
  };
};

