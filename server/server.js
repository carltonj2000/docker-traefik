const app = require('express')();
app.get("/:any", (req, res) => res.send(`Saw url ${req.url}`));
app.listen(80, () => console.log('Server on port 80'));
