const express = require("express");
const data = require("./data.json");

const app = express();

app.listen(3000);

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get("/", (req, res) => {
    res.render("index.pug", {projects: data.projects});
});

app.get("/about", (req, res) => {
    res.render("about.pug");
});

app.get("/projects/:id", (req, res) => {
    project = data.projects[req.params.id];
    res.render("project.pug", {title: project.project_name,
                               desc: project.description, 
                               techs: project.technologies,
                               live: project.live_link,
                               source: project.github_link,
                               images: project.image_urls.slice(1)}
    )
});