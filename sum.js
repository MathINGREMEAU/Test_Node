const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    math.sum(5, 6, 7)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
