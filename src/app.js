const express = require("express");
const User = require("./db/conn");
const path = require("path");
const app = express();
const port = process.env.port || 9000;
const ejs = require('ejs');
const { registerPartials } = require("ejs");


// midware
const staticpath = path.join(__dirname, "../public");
const templates = path.join(__dirname, "../templates/views");
const partials = path.join(__dirname, "../templates/partials");
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticpath));

// console.log(path.join(__dirname, "../public"))
//routing 
//app.get (path, callback)
app.set("view engine", "ejs");
app.set("views", templates);
ejs.registerPartials(partials);
app.get("/", (req, res) => {
    res.render("index");
})

app.post("/contact", async(req, res) => {

        // res.send(req.body)
        console.log(req.body.NAME);

        const userData = await new User(req.body);
        await userData.save();
        console.log(aa);
        if (aa) {
            res.render(aa);
        } else {
            res.status(500).send(error)
        }
    })
    // app.get("/contact", async(req, res) => {
    //     try {
    //         const studentData = await contact.find();
    //         res.send(studentData);

//     } catch (err) {
//         res.send(err);
//     }

// });

//server create
app.listen(port, () => {
    console.log(`server runing at port ${port}`);
});