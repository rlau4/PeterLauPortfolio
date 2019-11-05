var path = require("path");

module.exports= function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });

    app.get("/contact", function(req, res){
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

    app.get("/bio", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/bio.html"));
      });

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });
};