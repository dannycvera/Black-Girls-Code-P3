import React, { useEffect, useState } from "react";
// import "./WhereYourMoneyGoes.css";
import { getEvents } from "../..services/events";
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
    <div>
      {
        events.map((event) => {
          return (
            <div>
              <img source={event.imgURL} alt="image URL" />
              <h1>{event.title}</h1>
              <h1>`%${event.funds} of donations went towards funding this event`</h1>
              <h1>{event.content}</h1>
              <h1>`"${event.quote}"`</h1>
              <h1> `-${event.author}`</h1>
              <h1> {event.age}</h1>
            </div>
          )
        })}
    </div>
  )
}







export default WhereYourMoneyGoes