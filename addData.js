const { db } = require('./firebase')

// Example JSON data
const usersData = [
  {
    userId: '29806b34-ac7b-4de7-85c6-65e9b0b059a6',
    email: 'Pablo_Dickens45@yahoo.com',
    password: 'UIS3Et6YfQTBwbc',
    phone: '1-985-250-5778 x3073'
  },
  {
    userId: 'c3dfcbed-53ae-48ff-8789-8b08fc75ad5c',
    email: 'Michael_Lubowitz76@gmail.com',
    password: 'RbfdzUK_bTYqzzN',
    phone: '638.969.1917 x49217'
  },
  {
    userId: '91623ccd-8eb1-4453-a284-4ad3f9144efb',
    email: 'Sarina88@hotmail.com',
    password: '4Ww3K4mSBmPMM3L',
    phone: '978-586-8795 x316'
  },
  {
    userId: '1947d5d5-b031-41ed-8048-148141c52a43',
    email: 'Louisa_Marvin97@hotmail.com',
    password: 'ZzTSWmKsViMiM11',
    phone: '706-999-6125'
  },
  {
    userId: '605dfdb9-1dc8-4019-84c2-940dfd4b7eb2',
    email: 'Anastacio78@hotmail.com',
    password: 'bK27wrrDlHgYe8n',
    phone: '603-302-7704'
  }
];

// Write JSON data to Firestore
const batch = db.batch();
const usersCollection = db.collection('users');

usersData.forEach(userData => {
  const docRef = usersCollection.doc(userData.userId);
  batch.set(docRef, userData);
});

const animalsData = [
    {
        animalId: 'c2e86911-906b-4580-9f17-595943d2a8c1',
        gender: 'male',
        age: 11,
        breed: 'Basenji',
        type: 'bird',
        color: 'yellow',
        neuteredStatus: 'no',
        healthStatus: 'sick',
        description: 'Urbanus adfectus amaritudo vorago crux voluptatem virtus.',
        nickName: 'Madilyn',
        image: 'https://loremflickr.com/640/480?lock=2487163769847808',
        latitude: 47.9899,
        longitude: 65.702
    },
    {
        animalId: '8540c85e-e33e-4a94-9ffd-3205f016d5b7',
        gender: 'male',
        age: 6,
        breed: 'Pungsan Dog',
        type: 'bird',
        color: 'green',
        neuteredStatus: 'no',
        healthStatus: 'injured',
        description: 'Arca suspendo culpo alius valeo.',
        nickName: 'Kristoffer',
        image: 'https://loremflickr.com/640/480?lock=5180888780374016',
        latitude: 48.4106,
        longitude: -126.1207
    },
    {
        animalId: '0f1d25fc-c5ac-455c-be25-8a016512b92f',
        gender: 'male',
        age: 2,
        breed: 'King Shepherd',
        type: 'cat',
        color: 'azure',
        neuteredStatus: 'no',
        healthStatus: 'injured',
        description: 'Deleo cariosus censura nesciunt appositus caute dapifer surgo voluptas.',
        nickName: 'Kian',
        image: 'https://loremflickr.com/640/480?lock=1803073399816192',
        latitude: 45.2829,
        longitude: -117.1263
    },
    {
        animalId: '6e92fa87-d0d3-4c32-846d-6345cdc4866f',
        gender: 'male',
        age: 6,
        breed: 'Kintamani',
        type: 'dog',
        color: 'turquoise',
        neuteredStatus: 'no',
        healthStatus: 'sick',
        description: 'Stultus addo dedico curo corrigo.',
        nickName: 'Allan',
        image: 'https://loremflickr.com/640/480?lock=4614203052654592',
        latitude: 57.7049,
        longitude: -39.6521
    },
    {
        animalId: '08996a03-3d54-4a5d-ba75-27fc8c9ac033',
        gender: 'male',
        age: 7,
        breed: 'Irish Setter',
        type: 'dog',
        color: 'gold',
        neuteredStatus: 'yes',
        healthStatus: 'sick',
        description: 'Cibo sollers chirographum beatus sollers.',
        nickName: 'Jeramy',
        image: 'https://picsum.photos/seed/RwIy8/640/480',
        latitude: 33.0347,
        longitude: 0.006
    }
]

const animalsCollection = db.collection('animals');

animalsData.forEach(animalData => {
  const docRef = animalsCollection.doc(animalData.animalId);
  batch.set(docRef, animalData);
});


// Commit the batch
batch.commit()
  .then(() => {
    console.log('Batch write successful!');
  })
  .catch((error) => {
    console.error('Error writing documents: ', error);
  });