<<<<<<< HEAD
import React, { useEffect, useState } from "react"
import { getEvents } from "../../services/events.js"
import { Link } from "react-router-dom"
import Layout from "../../components/shared/Layout/Layout"
import "./WhereYourMoneyGoes.css"
=======
import React, { useEffect, useState } from "react";
import { getEvents } from "../../services/events.js";
import { Link } from "react-router-dom";
import Contributors from "../../components/shared/Contributors/Contributors";
import Layout from "../../components/shared/Layout/Layout";
// import Footer from "../../components/shared/Footer/Footer"
import "./WhereYourMoneyGoes.css";
>>>>>>> cd31aa3a7c4e58f9a1c758ba53528ccce60a7ad7

const WhereYourMoneyGoes = (props) => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    const fetchEvents = async () => {
<<<<<<< HEAD
      const event = await getEvents()
      setEvents(event)
    }
    fetchEvents()
  }, [setEvents])
  return (
    <Layout>
      <h1> Where Your Money Goes</h1>
      <div className="events-container">
        {events.map((event) => {
          return (
            <div className="main-event">
              <img
                src={
                  event.imgURL.startsWith("http")
                    ? event.imgURL
                    : require(`../../img/${event.imgURL}`)
                }
                alt="image URL"
              />
              <div className="event-content">
                <div className="title-button">
                  <h3>{event.title}</h3>
                  <Link to={`/event/edit/${event._id}`}>
                    <button className="edit-button">Edit</button>
                  </Link>
                </div>
                <h4>
                  {event.funds}% of donations went towards funding this event
                </h4>
                <p>{event.content}</p>
                <h4 className="quote">
                  "{event.quote}" -{event.author}, {event.age}
                </h4>
              </div>
            </div>
          )
        })}
        <Link to="/newevent">
          <button className="add-button">Add Event</button>
        </Link>
      </div>
    </Layout>
  )
}
export default WhereYourMoneyGoes
=======
      const event = await getEvents();
      setEvents(event);
    };
    fetchEvents();
  }, [setEvents]);
  return (
    <div>
      <Layout>
        <h1> Where Your Money Goes</h1>
        <div className="events-container">
          {events.map((event) => {
            return (
              <div className="main-event">
                <img
                  src={
                    event.imgURL.startsWith("http")
                      ? event.imgURL
                      : require(`../../img/${event.imgURL}`)
                  }
                  alt="image URL"
                />
                <div className="event-content">
                  <div className="title-button">
                    <h3>{event.title}</h3>
                    <Link to={`/event/edit/${event._id}`}>
                      <button className="edit-button">Edit Event</button>
                    </Link>
                  </div>
                  <h4>
                    {event.funds}% of donations went towards funding this event
                  </h4>
                  <p>{event.content}</p>
                  <h4 className="quote">
                    "{event.quote}" -{event.author}, {event.age}
                  </h4>
                </div>
              </div>
            );
          })}
          <Link to="/newevent">
            <button className="add-button">Add Event</button>
          </Link>
        </div>
      </Layout>
      <div className="contributors">
        <Contributors />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default WhereYourMoneyGoes;
>>>>>>> cd31aa3a7c4e58f9a1c758ba53528ccce60a7ad7
