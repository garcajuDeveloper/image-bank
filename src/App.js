import React, {useState, useEffect} from 'react';
import './styles/general_styles.css';
import ImageSearcherForm from './components/image_searcher_form';
import ImageList from './components/image_list';

function App() {

  const [search, saveSearchResult] = useState('');
  const [imageList, saveImageList] = useState([]);
  const [actualPaginatorPage, saveActualPaginatorPage] = useState(1);
  const [amountPages, saveAmountPages] = useState(1);

  useEffect(() => {
    const queryAPI = async () => {
      if(search === '') return;

      const imagesPerPage = 30;
      const key = '16053923-2f2c7d81df40323c4d27ed929';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${actualPaginatorPage}`;

      const queryResponse = await fetch(url);
      const queryResult = await queryResponse.json();

      saveImageList(queryResult.hits);
      saveAmountPages(Math.ceil(queryResult.totalHits / imagesPerPage));

      document.querySelector('.jumbotron').scrollIntoView({ behavior : 'smooth'});
    }
    queryAPI();
  }, [search, actualPaginatorPage]);

  const getLastPage = () => {
    const newActualPage = actualPaginatorPage - 1;
    if(newActualPage === 0) return;
    saveActualPaginatorPage(newActualPage);
  }

  const getNextPage = () => {
    const newActualPage = actualPaginatorPage + 1;
    if(newActualPage > amountPages) return;
    saveActualPaginatorPage(newActualPage);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">image bank <span className="lead">image & picture finder</span></h1>
        <ImageSearcherForm
          saveSearchResult={saveSearchResult}
        />
      </div>
      <div className="row justify-content-center">
        <ImageList 
          imageList={imageList}
        />
        
        {(actualPaginatorPage === 1) ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={getLastPage}
            >Last 
          </button>
        )}

        {(actualPaginatorPage === amountPages) ? null : (
          <button
            type="button"
            className="btn btn-info"
            onClick={getNextPage}
            >Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
