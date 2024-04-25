// Importing the @faker-js/faker module
const { faker } = require('@faker-js/faker');

function generateUsers(num) {
    let users = [];
    for (let i = 0; i < num; i++) {
        users.push({
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            phone: faker.phone.number()
        });
    }
    return users;
}

function generateAnimals(num) {
    let animals = [];
    for (let i = 0; i < num; i++) {
        animals.push({
            animalId: faker.string.uuid(),
            gender: faker.helpers.arrayElement(['male', 'female']),
            age: faker.number.int({ min: 1, max: 15 }),
            breed: faker.animal.dog(), // Assuming animal methods are available, check documentation for accuracy
            type: faker.helpers.arrayElement(['dog', 'cat', 'bird']),
            color: faker.vehicle.color(),
            neuteredStatus: faker.helpers.arrayElement(['yes', 'no']),
            healthStatus: faker.helpers.arrayElement(['healthy', 'sick', 'injured']),
            description: faker.lorem.sentence(),
            nickName: faker.person.firstName(),
            image: faker.image.url(), // Placeholder image URL; adjust as necessary
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude()
        });
    }
    return animals;
}

// Example usage
console.log(generateUsers(5));
console.log(generateAnimals(5));
