import React, { useState } from "react"
import "./EventCreate.css"
import Layout from "../../components/shared/Layout/Layout"
import { Redirect } from "react-router-dom"
import { createEvent } from "../../services/events"
import Contributors from "../../components/shared/Contributors/Contributors"

const EventCreate = (props) => {
  const [event, setEvent] = useState({
    imgURL: "",
    title: "",
    funds: "",
    content: "",
    quote: "",
    author: "",
    age: "",
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setEvent({
      ...event,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createEvent(event)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/whereyourmoneygoes`} />
  }
  return (
    <Layout user={props.user}>
      <div className="new-form-container">
        <form className="create-form" onSubmit={handleSubmit}>
          <label htmlFor="imgURL">
            <input
              className="input-image-link"
              placeholder="Image Link"
              value={event.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </label>

          <label htmlFor="title">
            <input
              className="input-title"
              placeholder="Title"
              value={event.title}
              name="title"
              required
              autoFocus
              onChange={handleChange}
            />
          </label>

          <label htmlFor="funds">
            <input
              className="input-funds"
              placeholder="Percentage"
              value={event.funds}
              type="text"
              name="funds"
              required
              onChange={handleChange}
            />
          </label>

          <label htmlFor="content">
            <textarea
              className="textarea-content"
              rows={10}
              placeholder="Content"
              value={event.content}
              name="content"
              required
              onChange={handleChange}
            />
          </label>

          <label htmlFor="quote">
            <input
              className="input-quote"
              placeholder="Quote"
              value={event.quote}
              name="quote"
              required
              onChange={handleChange}
            />
          </label>

          <label htmlFor="author">
            <input
              className="input-author"
              placeholder="Author"
              value={event.author}
              name="author"
              required
              onChange={handleChange}
            />
          </label>

          <label htmlFor="age">
            <input
              className="input-age"
              placeholder="Age"
              value={event.age}
              name="age"
              required
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default EventCreate
