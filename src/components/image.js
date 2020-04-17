import React from 'react';

const Image = ({image}) => {

    const { largeImageURL,likes,previewURL,tags,views } = image;

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div classname="card-body">
                    <a 
                        href={largeImageURL}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-success btn-block"
                        >
                            See Image
                    </a>
                </div>
                <div classname="card-footer">
                    <div className="row justify-content-between">
                        <div className="col-6">
                            <p className="card-text">{likes} Likes</p>
                        </div>
                        <div className="col-6">
                            <p className="card-text">{views} Views</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Image;