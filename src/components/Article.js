import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function Article() {
    //Wrapped Paramters from URL
    const {id} = useParams()
    const url = 'http://localhost:3000/articles/' + id
    const { data: article, isLoading, error} = useFetch(url);
    const history = useHistory()

    //Redirects User if Error Occurs
    useEffect(() => { 
        if (error) { 
            //redirect
            setTimeout(() => { 
                history.push('/')
            }, 2000)
        }
    }, [error, history])

  return (
      <div>
          Article Page - { id }
          <>
              {isLoading && <div>Loading...</div>} 
              {error && <div>{error}</div>}
              {article && (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>By: {article.author}</p>
                    <p>{article.body}</p>
                </div>
              )}
              
          </>
      </div>
  )
}
