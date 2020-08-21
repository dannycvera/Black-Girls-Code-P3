import React, { useState } from 'react'
// import './EventCreate.cc'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createEvent } from '../../services/events'

const EventCreate = (props) => {

  const [event, setEvent] = useState({
    imgURL:'',
    title:'',
    funds:0,
    content:'',
    quote:'',
    author:'',
    age:0
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setEvent({
           ...event,
           [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createEvent(event)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/events`} />
  }
   return (
     <Layout user={props.user}>
      <form className='create-form' onSubmit={handleSubmit}>
         <input 
             className='input-image-link'
             placeholder='Image Link'
             value={event.imgURL}
             name='imgURL'
             required
             onChange={handleChange}
          />

          <input 
              className='input-title'  
              placeholder='Title'
              value={event.title}
              name='title'
              required
              autoFocus
              onChange={handleChange}
          /> 
          <input 
              className='input-funds'  
              placeholder='Percentage'
              value={event.funds}
              name='funds'
              required
              onChange={handleChange}
          /> 
          <textarea
             className='textarea-content'
             rows={10}
             placeholder='Content'
             value={event.content}
             name='content'
             required
             onChange={handleChange}
          />
          <input 
             className='input-quote'
             placeholder='Quote'
             value={event.quote}
             name='quote'
             required
             onChange={handleChange}
          />
          <input 
             className='input-author'
             placeholder='Author'
             value={event.author}
             name='author'
             required
             onChange={handleChange}
          />
          <input 
              className='input-age'  
              placeholder='Age'
              value={event.age}
              name='age'
              required
              onChange={handleChange}
          /> 
          <button type='submit' className='submit-button'>Submit</button>
      </form>
    </Layout>      

   )
}

export default EventCreate