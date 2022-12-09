import {Component} from "react";
import Searchbar from "./Searchbar/Searchbar";
import './styles.css'
// import ImageGallery from "./ImageGallery/ImageGallery";



export default class App extends Component {
  state = {
    searchName: '',
    image: null,
    previewImage: [],
  }
   async componentDidUpdate() {
    await fetch(`https://pixabay.com/api/?q=${this.state.searchName}&page=1&key=28720978-48527d1c9d73f1bfd555e68c2&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json()).then(json => {
        this.setState({
          image: json.hits,
          previewImage: json.hits[2].previewURL,

        })
        console.log("log в фетче", this.state.previewImage)
        
      });
    
  } 
  
  handleSubmit = (searchName) => {
    this.setState({
      searchName,
    });
    console.log("name", this.state.searchName)
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={ this.handleSubmit} />
        {this.state.image &&
          <li class="gallery-item">
            <img src={this.state.previewImage} alt="nknkjn" />
          </li>
        }
      
      </div>
    );
  };
};

