const Team = require('../models/teamModel');

const createTeam = async (req,res)=>{
    try{
        const team = await Team.create(req.body);
        return res.status(201).json({success:true, message:"Team created successfully", data: team});
    }
    catch(e){
        if(e.code === 11000){
            const field = Object.keys(e.keyValue)[0];
            return res.status(409).json({success:false, message: `${field} already exists`});
        }
        else if (e.name==="ValidationError"){
            const errors = Object.values(e.errors).map(error => error.message);
            return res.status(400).json({success:false, message:"Validation Error", error: errors});
        }
        else{
            return res.status(500).json({success:false, message: "Internal Server Error", error: e.message});
        }
    }
}

const getAllTeams = async (req,res)=>{
    try{
        const teams = await Team.find();
        return res.status(200).json({success:true, message: "Teams fetched successfully", data:teams});
    }
    catch(e){
        return res.status(500).json({success:false, message: "Internal Server Error", error: e.message});
    }
}

const getTeamById = async (req,res)=>{
    try{
        const team = await Team.findById(req.params.id);
        if(!team){
            return res.status(404).json({success:false, message: "Team not found"});    
        }
        return res.status(200).json({success:true, message:"Team fetched successfully", data:team});
    }
    catch(e){
        if(e.name==="CastError"){
            return res.status(400).json({success:false, message:"Invalid ID format"});
        }
        return res.status(500).json({success:false, message:"Internal Server Error", error: e.message});
    }
}

const updateTeamDetails = async (req,res)=>{
    try{
        if(req.body._id){
            return res.status(400).json({success:false, message:"ID cannot be updated"});
        }

        const team = await Team.findByIdAndUpdate(req.params.id,req.body, {
            new:true,
            runValidators: true
        });
        if(!team){
            return res.status(404).json({success:false, message: "Team not found"});
        }
        return res.status(200).json({success:true, message:"Team updated successfully", data:team});
    }
    catch(e){
        if(e.name ==="ValidationError"){
            const errors = Object.values(e.errors).map(error=>error.message);
            return res.status(400).json({success:false, message: "Validation Error", error: errors});
        }
        if(e.code === 11000){
            const field = Object.keys(e.keyValue)[0];
            return res.status(409).json({success:false, message: `${field} already exists`});
        }

        if(e.name==="CastError"){
            return res.status(400).json({success: false, message: "Invalid ID format"});
        }
        return res.status(500).json({success:false, message:"Internal Server Error", error: e.message});

    }
}

const deleteTeam = async(req,res)=>{
    try{
        const team = await Team.findByIdAndDelete(req.params.id);
        if(!team){
            return res.status(404).json({success:false, message:"Team not found"});
        }
        return res.status(200).json({success:true, message:"Team deleted successfully", data:team});
    }
    catch(e){
        if(e.name==="CastError"){
            return res.status(400).json({success:false, message:"Invalid ID format"});
        }
        return res.status(500).json({success:false, message:"Internal Server Error", error: e.message});
    }
}

module.exports = {createTeam, getAllTeams, getTeamById, updateTeamDetails, deleteTeam};




//Test Data
// {
//     "teamName": "databots",
//     "leaderName": "Aaditya Jaiswal",
//     "leaderEmail": "aaditya.jaiswal2024@vitstudent.ac.in",
//     "leaderReg":"24BCE2584",
//     "leaderYear":2,
//     "members": [
//         {"name":"Diptesh Das",
//         "reg":"24BCE2536",
//         "email":"diptesh.das2024@vitstudent.ac.nin",
//         "year":2},
        
//         {"name":"Harsh",
//         "reg":"24BAI0080",
//         "email":"harsh@vitstudent.ac.in",
//         "year":3}],
//     "college":"Vellore Institute of Technology"
// }