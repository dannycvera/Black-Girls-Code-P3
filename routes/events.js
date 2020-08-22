const { Router } = require("express")
const controllers = require("../controllers/events")

const router = Router()

router.get("/events", controllers.getEvents)
router.get("/events/:id", controllers.getEvent)
router.post("/events", controllers.createEvent)
router.put("/events/:id", controllers.updateEvent)
router.delete("/events/:id", controllers.deleteEvent)

module.exports = router
