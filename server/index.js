const express = require("express");
const cors = require("cors");
const app = express();
const controller = require('./controller')
const { getCompliment, getMyFortune, theMirror,theToDolist, theCoinfilp, signMeUp, listpokemon, byebyepokemon  } = controller


app.use(cors());
app.use(express.json());

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getMyFortune);
app.post('/api/mirror', theMirror);
app.post('/api/todolist', theToDolist)
app.get('/api/filp', theCoinfilp )
app.post('/api/sign-up', signMeUp)
app.get('/api/getpokemon', listpokemon)
app.delete('/api/deletepokemon', byebyepokemon)


app.listen(4000, () => console.log("Server running on 4000"));
