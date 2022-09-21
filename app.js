const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    console.log('Server request')

    res.setHeader('Content-Type', 'text/html')

    const createPath = (page) => path.resolve(__dirname, 'src/Components/Routes/index.js', `${page}.js`)

    let basePath = ''

    switch (req.url) {
        case ('/'):
            basePath = createPath('index')
            res.statusCode = 200
            break
        // case ('/User'):
        //     basePath = createPath('User')
        //     break
        // default:
        //     basePath = createPath('error')
        //     res.statusCode = 404
        //     break
    }
    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        }
        else {
            res.write(data)
            res.end()
        }
    })
})

const port = process.env.PORT || 3000
server.listen(port)
console.log(`Server started on port ${port}!`)