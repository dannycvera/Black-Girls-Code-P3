const Event = require("../models/event")
const database = require("../db/connection")
database.on("error", console.error.bind(console, "did not connect to MongoDB"))

const getEvents = async (req, res) => {
  try {
    const events = await Event.find()
    res.json(events)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getEvent = async (req, res) => {
  try {
    const { id } = req.params
    const newEvent = await Event.findById(id)
    if (newEvent) {
      return res.json(newEvent)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createEvent = async (req, res) => {
  try {
    const event = await new Event(req.body)
    await event.save()
    res.status(201).json(event)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateEvent = async (req, res) => {
  const { id } = req.params
  await Event.findByIdAndUpdate(id, req.body, { new: true }, (error, event) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    }
    if (!event) {
      return res.status(404).json({ error: error.message })
    }
    res.status(200).json(event)
  })
}

const deleteEvent = async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await Event.findByIdAndDelete(id)
    return res.status(200).send("Event deleted!")
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getEvent,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
}
