const express = require('express')
const {
    createBooking,
    findBooking,
    findBookings,
    deleteBooking,
    updateBooking
} = require('../controllers/bookingController')
const requireAuth = require("../middleware/authentication")

const router = express.Router()
router.use(requireAuth)

router.get('/', findBookings)
router.get('/:id', findBooking)
router.post('/', createBooking)
router.patch('/:id', updateBooking)
router.delete('/:id',deleteBooking)

module.exports = router