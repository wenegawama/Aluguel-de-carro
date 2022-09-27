import express from "express"

const app = express()

app.get("/", (request, response) => {
    response.json({
        "message":"Hello Worddd"
    })
})

app.listen(3333, () => console.log("Sever is running!"))