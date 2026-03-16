const express = require("express");
const router = express.Router();

const { signup,login } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;





const authMiddleware = require("../middleware/authMiddleware");

router.get("/profile", authMiddleware, (req, res) => {

    res.json({
        message: "Welcome to your profile",
        user: req.user
    });

});





router.post("/logout", (req, res) => {
    res.json({
        message: "User logged out successfully"
    });
});