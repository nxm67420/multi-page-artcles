import React from 'react'


export default function Contact() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hello {name}, Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla tempore est
        expedita nisi eveniet odio dicta. Tempora expedita sint dicta, ducimus
        necessitatibus, at magni aut porro, quis nam explicabo!</p>  
    </div>
  )
}
