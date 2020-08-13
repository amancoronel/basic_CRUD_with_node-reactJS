module.exports = (app) => {
    app.get("/", (req, res) => {
        console.log("*********** TEST", req.session);
        res.render("index");
    })

    app.post("/login", (req,res) => {
        if(req.body.username === "username" && req.body.password === "password") {
            req.session.user = req.body;
            req.session.save();
            res.status(200).json({message: "Success"});
        } else {
            res.status(404).json({message: "User not found"});
        }
    })

    app.get("/logout", (req, res) => {
        req.session.destroy();
        req.session = null;
        res.send(200).json({message : "Success" })
    })


    //CRUD
    app.post("/addPlayers", (req, res) => {
        if(req.session.user) {
            Players.push({
                id : Players.length + 1,
                name : req.body.content
            })
            res.status(200).json(Players);
        } else {
            res.status(403).json({message : "Forbidden"})
        }
            
    })

    app.get("/getPlayers", (req, res) => {
        if(req.session.user) res.status(200).json(Players)
        else res.status(403).json({message : "Forbidden"})
    })

    app.get("/getPlayers/:id", (req,res) => {
        if(req.session.user) {
            let id = req.params.id;
            let data = Players.filter(player => player.id == id);
            res.status(200).json(...data)
        } else {
            res.status(403).json({message : "Forbidden"})
        }
            
    })

    app.put("/updatePlayers", (req, res) => {
        if(req.session.user) {
            let found = Players.some(player => player.id === parseInt(req.body.id))
            if(found) {
                Players.forEach(player => {
                    if(player.id === parseInt(req.body.id)) player.name = req.body.name ? req.body.name : player.name;
                })
                res.status(200).json(Players)
            } else res.status(400).json({message: "Player not found"})
        } else {
            res.status(403).json({message : "Forbidden"})
        }
    })

    app.delete("/deletePlayers", (req, res) => {
        if(req.session.user) {
            let found = Players.some(player => player.id === parseInt(req.body.id))
            if(found) {
                [...Players] = Players.filter(player => player.id != parseInt(req.body.id))
                res.status(200).json(Players)
            } else res.status(400).json({message: "Player not found"})
        } else {
            res.status(403).json({message : "Forbidden"})
        }
    })

    app.get("*", (req, res) => {
        res.redirect("/");
    })
    
}