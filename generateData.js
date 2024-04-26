const { faker } = require('@faker-js/faker');

function generateUsers(num) {
    let users = [];
    for (let i = 0; i < num; i++) {
        users.push({
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            phone: '+852'+faker.string.numeric(8),
            role: faker.helpers.arrayElement(['admin', 'user']),
        });
    }
    return users;
}

function generateAnimals(num) {
    let animals = [];
    for (let i = 0; i < num; i++) {
        let images = [];
        for (let j = 0; j < Math.floor(Math.random() * 5) + 1; j++) {
            images.push(faker.image.url()); 
        }

        animals.push({
            animalId: faker.string.uuid(),
            gender: faker.helpers.arrayElement(['male', 'female']),
            age: faker.number.int({ min: 1, max: 15 }),
            breed: faker.helpers.arrayElement([faker.animal.dog(), faker.animal.cat()]), // Assuming animal methods are available, check documentation for accuracy
            type: faker.helpers.arrayElement(['dog', 'cat']),
            color: faker.vehicle.color(),
            neuteredStatus: faker.helpers.arrayElement(['yes', 'no']),
            healthStatus: faker.helpers.arrayElement(['healthy', 'sick', 'injured']),
            description: faker.lorem.sentence(),
            nickName: faker.person.firstName(),
            image: faker.image.url(),
            album: images,
            voiceSample: "",
            video: "",
            latitude: faker.address.latitude({max: 22.5 , min: 22.2}),
            longitude: faker.address.longitude({max: 114.3 , min: 113.8})        });
    }
    return animals;
}

function generateCameraData(num) {
    let cameras = [];
    for (let i = 0; i < num; i++) {
        cameras.push({
            cameraId: faker.string.uuid(),
            ip: faker.internet.ip(),
            latitude: faker.address.latitude({max: 22.5 , min: 22.2}),
            longitude: faker.address.longitude({max: 114.3 , min: 113.8}),
            url: faker.internet.url(),
            startTime: new Date(faker.date.recent()).getTime(),
        });
    }
    return cameras;
}

function generateReportData(num) {
    let reports = [];
    for (let i = 0; i < num; i++) {
        let images = [];
        for (let j = 0; j < Math.floor(Math.random() * 5) + 1; j++) {
            images.push(faker.image.url()); 
        }

        reports.push({
            userId: faker.string.uuid(),
            reportId: faker.string.uuid(),
            // animalId: faker.string.uuid(),
            gender: faker.helpers.arrayElement(['male', 'female']),
            age: faker.number.int({ min: 1, max: 15 }),
            breed: faker.helpers.arrayElement([faker.animal.dog(), faker.animal.cat()]), // Assuming animal methods are available, check documentation for accuracy
            type: faker.helpers.arrayElement(['dog', 'cat']),
            color: faker.vehicle.color(),
            neuteredStatus: faker.helpers.arrayElement(['yes', 'no']),
            healthStatus: faker.helpers.arrayElement(['healthy', 'sick', 'injured']),
            description: faker.lorem.sentence(),
            nickName: faker.person.firstName(),
            image: faker.image.url(),
            album: images,
            voiceSample: "",
            video: "",
            latitude: faker.address.latitude({max: 22.5 , min: 22.2}),
            longitude: faker.address.longitude({max: 114.3 , min: 113.8}),            
            timestamp: new Date(faker.date.recent()).getTime(),
        });
    }
    return reports;
}

function generateAnimalHLSData(num) {
    let animalHLS = [];
    for (let i = 0; i < num; i++) {
        let disappearTime = new Date(faker.date.recent()).getTime();
        let appearTime = new Date(faker.date.recent({refDate: disappearTime})).getTime();
        animalHLS.push({
            id: faker.string.uuid(),
            url: faker.internet.url(),
            animalId: faker.string.uuid(),
            AppearDate: new Date(faker.date.recent()).getFullYear() + '-' + (new Date(faker.date.recent()).getMonth() + 1 )+ '-' + new Date(faker.date.recent()).getDate(),
            AppearTime: appearTime,
            DisappearDate: new Date(faker.date.recent()).getFullYear() + '-' + (new Date(faker.date.recent()).getMonth() + 1 )+ '-' + new Date(faker.date.recent()).getDate(),
            DisappearTime: disappearTime,
            
        });
    }
    return animalHLS;
}


// Example usage
// console.log(generateUsers(10));
// console.log(generateAnimals(20));
// console.log(generateCameraData(10));
console.log(generateReportData(7));
// console.log(generateAnimalHLSData(10));