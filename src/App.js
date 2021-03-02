import './App.css';
import React, { useEffect, useState } from 'react';
import News from "./Components/News/News";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() =>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=81fdb40ab756421e9d4e34a2aac4d273')
    .then(res => res.json())
    .then(data => {
      setArticles(data.articles);
    })
  },[])

  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
