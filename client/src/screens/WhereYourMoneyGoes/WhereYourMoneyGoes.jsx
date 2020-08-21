import React, { useEffect, useState } from "react"
// import "./WhereYourMoneyGoes.css";
import { getEvents } from "../../services/events.js"
import Layout from "../../components/shared/Layout/Layout"

const WhereYourMoneyGoes = (props) => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    const fetchEvents = async () => {
      const event = await getEvents()
      setEvents(event)
    }
    fetchEvents()
  }, [])
  return (
    <Layout>
      <div>
        {events.map((event) => {
          return (
            <div>
              <img src={event.imgURL} alt="image URL" />
              <h3>{event.title}</h3>
              <h4>
                %{event.funds} of donations went towards funding this event
              </h4>
              <p>{event.content}</p>
              <h4>"{event.quote}"</h4>
              <h4> -{event.author},</h4>
              <h4> {event.age}</h4>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
export default WhereYourMoneyGoes
