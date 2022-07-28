const {faker} = require('@faker-js/faker');

const express = require('express')
const port = 8000;

// Creating an instance for our server app
const app = express();


app.get('/', (req, res) => {
    return res.send({ hello: "world"})
});

app.get('/api/users/new', (req, res) => {
    return res.send({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        _id: faker.datatype.uuid(),
    })
})

app.get('/api/companies/new', (req, res) => {
    return res.send({
        companyName: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.county()
        }
    })
})

app.get('/api/user/company', (req, res) => {
    return res.send({
        user: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            phoneNumber: faker.phone.number(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            _id: faker.datatype.uuid(),
        },
        company: {
            companyName: faker.company.companyName(),
            address: {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.county()
            }
        }
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port} for Requests and Respond`)
})

