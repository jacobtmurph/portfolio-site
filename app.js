const express = require("express");
const data = require("./data.json");

const app = express();

app.listen(3000);

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get("/", (req, res) => {
    res.render("index", {projects: data.projects});
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/projects/:id", (req, res) => {
    project = data.projects[req.params.id];
    res.render("project", {title: project.project_name,
                               desc: project.description, 
                               techs: project.technologies,
                               live: project.live_link,
                               source: project.github_link,
                               images: project.image_urls.slice(1)}
    );
});

app.use( (req, res, next) => {
    const err = Error("Oops! This page doesn't exist");
    err.status = 404;
    next(err);
})

app.use( (err, req, res, next) => {
    res.render("error", {error: err});
});