const { User } = require('../models');

const userData = [
    {
        username: "Sal",
        twitter: "Sal96",
        github: "Sal96",
        email: "sal@hotmail.com",
        password: "password12345"
    },
    {
        username: "Lernantino",
        twitter: "Lernantino89",
        github: "Lernantino89",
        email: "Lernantino@gmail.com",
        password: "password12345"
    },
    {
        username: "shaun_c",
        twitter: "shaun",
        github: "shaun",
        email: "shaun_c@gmail.com",
        password: "password12345"
    },
    {
        username: "Amiko2k20",
        twitter: "Amiko2k20",
        github: "Amiko2k20",
        email: "amiko2k20@aol.com",
        password: "password12345"
    },
    {
        username: "Jordan99",
        twitter: "Jordan99",
        github: "Jordan99",
        email: "Jordan99@msn..com",
        password: "password12345"
    },
    {
        username: "Blake81",
        twitter: "Blake81",
        github: "Blake81",
        email: "the_blake@yahoo.com",
        password: "password12345"
    }
]

const seedUsers = () => User.bulkCreate(userData);

//Do I need to add the hooks here?

module.exports = seedUsers;