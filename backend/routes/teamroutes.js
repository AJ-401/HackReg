const express = require("express");
const router = express.Router();
const {createTeam, getAllTeams, getTeamById, updateTeamDetails, deleteTeam} = require("../controllers/teamController");



router.post("/",createTeam);

router.get("/",getAllTeams);

router.get("/:id",getTeamById);

router.patch("/:id",updateTeamDetails);

router.delete("/:id",deleteTeam);

module.exports = router;