const https = require('https')
const path = require('path')


https.get('https://reqres.in/api/users', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    })

    resp.on('end', () => {
        require('fs').writeFileSync(path.join(__dirname, 'file.csv'), 'ID, Email, First Name, Last Name\n')
        let values = JSON.parse(data).data
        for (const value of values) {
            require('fs').appendFileSync(path.join(__dirname, 'file.csv'), `${value.id}, ${value.email}, ${value.first_name}, ${value.last_name}\n`)
        }
    })
})