const express = require("express")
const userIdentification = require("../middlewares/auth_middleware")
const router = express.Router()

router.get('/', (req, res) => {
	res.send(`
		<h3>Hello, Welcome Home</h3>
		<a href="/home"> Home </a>
		`)
})

router.get('/home', userIdentification, (req, res) => {
	const { username, userId, role } = req.userInfo
	res.send(`
		<h3 style="text-align:center; color:green; font-family:poppins;">Hello, Welcome Home</h3>
		<a href="/"> Back </a>
		`)
	res.json({
		success: true,
		message: "Access granted...",
		user: {
			_id: userId,
			username: username,
			role: role
		}
	})
})

router.use((req, res) => {
	res.send(`
    <h2 style="color:red; text-align:center; font-family:Poppins;">
      Page Not Found...
    </h2>
    `)
})

module.exports = router