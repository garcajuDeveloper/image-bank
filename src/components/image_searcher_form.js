import React, {useState} from 'react';
import ErrorValidator from './error_validator';

const ImageSearcherForm = ({saveSearchResult}) => {

    const [imageTheme, saveImageTheme] = useState("");
    const [errorFormValidator, saveErrorFormValidator] = useState(false);
    const searchImagesList = e => {
        e.preventDefault();
        if(imageTheme.trim() === ''){
            saveErrorFormValidator(true);
        }else{
            saveErrorFormValidator(false);
            saveSearchResult(imageTheme);
        }   
    }

    return (  
        <form
            onSubmit={searchImagesList}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="type a picture's or image's name to find"
                        onChange={e => saveImageTheme(e.target.value) }
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-success btn-block"
                        value="Find!"
                    />
                </div>
            </div>
            {errorFormValidator ? <ErrorValidator message = "No image theme founded!" /> : null} 
        </form>
    );
}
 
export default ImageSearcherForm;