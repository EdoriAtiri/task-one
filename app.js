const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())

app
  .route('/')

  .get((req, res) => {
    feedback = {
      slackUsername: 'dori',
      backend: true,
      age: 28,
      bio: "Hey, I'm a web developer and tech enthusiast who is passionate about creating websites and web apps that convey intent through beautiful typography, concise design patterns and efficient development practices. I can use several web development tools including JavaScript, Angular, React, HTML5, CSS, TailwindCSS, Typescript, NodeJS, Python, Flask and more.",
    }
    res.status(200).json(feedback)
  })

app.listen(3000, function () {
  console.log('Server started on port 3000')
})
