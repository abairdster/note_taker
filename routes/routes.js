//Notes var
//API routes
//setup the API to connect notes get route
//setup the API to connect notes post route
//Retrieve notes with id 
//Delete notes with id
//Display notes in html when accessed
//update json whenever note is added or removed
const express = require('express')
const router = express.Router();
const fs = require('fs');

module.exports = app => {
    fs.readFile("./db/db.json", function(err,data){
        if (err) throw err;
        var notes = JSON.parse(data);
        app.get("api/notes.html",function(req,res) {
            res.json(notes);
        })

        app.post("api/notes.html",function(req,res) {
            let newNote=req.body.notes;
            notes.push(newNote);
            updateDb();
            return console.log("Added new note: "+newNote.title);
        });

        app.get("api/notes/:id",function(req,res) {
            res.json(notes[req.params.id]);
        });

        app.delete("api/notes/:id",function(req,res) {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("Deleted notes with id: "+req.params.id);
        });

        app.get("/notes",function(req,res) {
            res.sendFile(path.join(__dirname,"./public/notes.html"));
        });

        function updateDb() {
            fs.writeFile("./db/db.json",JSON.stringify(notes,'\t'),err => {
                if(err) throw err;
                return true;
            });
        }

    }
)}

router.post("/",(req, res) => {
    fs.readFile("./db/db.json","utf-8",(err, data) => {
        if(err) {
            throw err;
        }else{

            const db = JSON.parse(data);
            console.log(req.body);
            db.push(req.body);
            fs.writeFile("./db/db.json",JSON.stringify(note));
            if (err){
                throw err;
            }else{
                res.json(notes)
            }
        }
    })
})

module.exports = router;