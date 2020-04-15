import React, {useState, useEffect} from 'react';
import './styles/general_styles.css';
import ImageSearcherForm from './components/image_searcher_form';

function App() {

  const [search, saveSearchResult] = useState('');

  useEffect(() => {
    const queryAPI = async () => {
      if(search === '') return;

      const imagesPerPage = 30;
      const key = '16053923-2f2c7d81df40323c4d27ed929';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`;

      const queryResponse = await fetch(url);
      const queryResult = await queryResponse.json();

      saveSearchResult(queryResult.hits);
    }
    queryAPI();
  }, [search]);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">image bank <span className="lead">image & picture finder</span></h1>
        <ImageSearcherForm
          saveSearchResult={saveSearchResult}
        />
      </div>
    </div>
  );
}

export default App;
