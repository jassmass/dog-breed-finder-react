import React from "react";
// import Results from "../results/Results";
import Result from "../result/Result";
import './Classifier.css'
import placeholder from './placeholder-dog.png'
import * as mobilenet from '@tensorflow-models/mobilenet';
import ClipLoader from "react-spinners/ClipLoader";

class Classifier extends React.Component {
    state = {
        image: placeholder,
        results: [],
        loadingResults: false,
        isImageUploaded: false
    }

    async photoUploaded(e) {
      this.setState({
          image: URL.createObjectURL(e.target.files[0])
      })
      this.setState({
          loadingResults: true
      })
      const uploadedImage = document.getElementById('placeholder-image');
      const model = await mobilenet.load();
      const predictions = await model.classify(uploadedImage);
      this.setState({
          results: predictions,
          loadingResults: false,
          isImageUploaded: true
      })
    }

    clearPhotoAndResults = () => {
        this.setState({
            image: placeholder,
            isImageUploaded: false,
            results: []
        })
    }
   
    render() {
        let index = 0;
        return console.log('rendering results', this.state.results) || (
            <div className="main-container">
              <div className="container-1024">
                <img src={this.state.image} alt="placeholder" className="placeholder-image" id="placeholder-image"/> <br />
                <br />
  
                <div className="upload-image-button" id="upload-image-button">
                  <label for="upload-image" className="upload-file-label">
                      Upload image
                  </label>
                  <input type="file" id="upload-image" onChange={(e) => this.photoUploaded(e)}/>
                  {
                      !this.state.isImageUploaded ?
                       (<p className="no-image-chosen" id="no-image-chosen">No image chosen</p>)
                    : (<p class="clear-button" onClick={this.clearPhotoAndResults}>Clear</p>)
                  }
                </div>

                
                {(this.state.results.length > 0 || this.state.loadingResults) &&
                <div className="results" id="results">
                    {this.state.loadingResults ?
                        <ClipLoader loading={this.state.loadingResults} />
                        : this.state.results.map((result, resultIdx) => {
                            index++;
                            return <Result
                                key={resultIdx}
                                dogBreed={result.className}
                                probability={Math.round(100 * result.probability)  + '%'}
                                isLast={index === 3 ? true : false}
                                />
                        })}
                    </div>
                    }
              </div>
            </div>
        )
    }
}

export default Classifier;