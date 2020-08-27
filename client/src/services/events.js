import api from "./apiConfig"

export const getEvents = async () => {
  try {
    const response = await api.get("/")
    return response.data
  } catch (error) {
    throw error
  }
}

export const getEvent = async (id) => {
  try {
    const response = await api.get(`/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createEvent = async (event) => {
  try {
    const response = await api.post("/", event)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateEvent = async (id, event) => {
  console.log("updateEvent")
  try {
    const response = await api.put(`/${id}`, event)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteEvent = async (id) => {
  try {
    const response = await api.delete(`/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}
