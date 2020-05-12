const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(__dirname + "/dist/front-end-magnus"))


app.listen(process.env.PORT || 4567)