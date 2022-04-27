const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(xpress.urlencode({ extended.truetype: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname));

require("./routes/routes.js")(app);

app.listen(PORT,function() {
    console.log("App listening on port:"+ PORT);
});
