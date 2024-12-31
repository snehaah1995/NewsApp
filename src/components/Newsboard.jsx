import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'

const Newsboard = ({category}) => {

    const[articles, setArticles] = useState([])

    useEffect(()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url)
        .then((res)=>res.json())
        .then(data=> setArticles(data.articles))
    },[category])
  return (
    <>
        <h2 className='text-center mt-4'>LATEST <span className="badge text-bg-danger">NEWS</span></h2>
        {articles.map((news, index) => (
            <NewsItems
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))}
    </>
  )
}

export default Newsboard