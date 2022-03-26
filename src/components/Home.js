import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
//Components && Custom Hooks
import { useFetch } from '../hooks/useFetch'
//Styles
import '../css/home.css'


export default function Home() {

  //Fetching Data to use in this.Component 
  const {data: articles, error, isPending } = useFetch('http://localhost:3000/articles')

  return (
    <div className='home'>
      <h2>Articles</h2>
      {/*Loading Message */ }
      {isPending && <div>Loading....</div>}

      {/*If Error Occurs */ }
      {error && <div>{error}</div>}

      {/* If we have Data to Return, Give Each Artcle  */}
      {articles && articles.map((article) => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <Link to={`/articles/${article.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
    
  )
}
