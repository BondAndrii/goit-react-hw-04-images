import {Component} from "react";
import Searchbar from "./Searchbar/Searchbar";
// import ImageGallery from "./ImageGallery/ImageGallery";



export default class App extends Component {
  state = {
    searchName: '',
    image: null,
  }
   async componentDidMount() {
    await fetch('https://pixabay.com/api/?q=cat&page=1&key=28720978-48527d1c9d73f1bfd555e68c2&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json()).then(json => {
        this.setState({ image: json.hits, })
        // console.log("log в фетче", this.state.searchName)
        
      });
    
  }  
  handleSubmit = (data) => {
    this.setState ({
      searchName:data,
      })
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={ this.handleSubmit} />
        {this.state.image && <h1 >{this.state.searchName}</h1>
        }
      
      </div>
    );
  };
};

