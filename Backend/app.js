const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const linkRoutes = require("./Routes/createRoute")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "Frontend")));

app.use("/api/links/", linkRoutes);

app.listen(5000, () => {
   console.log("Server is listening");
})