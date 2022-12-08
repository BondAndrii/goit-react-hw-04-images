import {Component} from "react";
import Searchbar from "./Searchbar/Searchbar";
// import ImageGallery from "./ImageGallery/ImageGallery";



export default class App extends Component {
  state = {
    image: null,
  }
   async componentDidMount() {
    await fetch('https://pixabay.com/api/?q=cat&page=1&key=28720978-48527d1c9d73f1bfd555e68c2&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json()).then(json => {
        this.setState({ image: json.hits, })
        console.log("log в фетче", this.state.image)
        
      });
    //  this.setState({ image: res.hits, })
    //  console.log(this.state.image[0]);
  }
   
  // componentDidMount() {
  //   fetch('https://pixabay.com/api/?q=cat&page=1&key=28720978-48527d1c9d73f1bfd555e68c2&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(res => res.json()).then(picture => this.setState({ image: picture.webformatURL }));
  //   console.log(this.state.image);
  // }
  

  render() {
    return (
      <div>
        <Searchbar />
        {this.state.image && <li class="gallery-item">
      <img src="https://pixabay.com/get/gdfc56165ee2783cab9747a51ea2c8952509341d9b9c328c479d5cc1e70732fe800da16ad55c5e217e431ea4b742f864291e3d04f2dc7177876a69daf7a53d9c4_1280.jpg" alt="Rjifrf" />
    </li>
        }
      
      </div>
    );
  };
};

