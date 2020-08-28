import React, { useEffect, useState } from "react";
import { getEvents } from "../../services/events.js";
import { Link } from "react-router-dom";
import Contributors from "../../components/shared/Contributors/Contributors";
import Layout from "../../components/shared/Layout/Layout";
// import Footer from "../../components/shared/Footer/Footer"
import "./WhereYourMoneyGoes.css";

const WhereYourMoneyGoes = (props) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      const event = await getEvents();
      setEvents(event);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Layout>
        <div className="wymg">
          <h1 className="title-wymg"> Where Your Money Goes</h1>
          <div className="events-container">
            {events.map((event) => {
              return (
                <div className="main-event" key={event._id}>
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
                      {event.funds}% of donations went towards funding this
                      event
                    </h4>
                    <p>{event.content}</p>
                    <h4 className="quote">
                      "<em>{event.quote}</em>" -{event.author}, {event.age}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="/newevent">
            <button className="add-button">Add Event</button>
          </Link>
          <div className="contributors">
            <Contributors />
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default WhereYourMoneyGoes;
