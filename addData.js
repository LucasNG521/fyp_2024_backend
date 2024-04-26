const { db } = require('./firebase')

// Write JSON data to Firestore
const batch = db.batch();


const usersData = [
  {
    userId: 'a5365367-5286-4977-b17a-f91a757612d1',
    email: 'lucas@123.com',
    password: '123',
    phone: '+85269932897',
    role: 'admin'
  },
  {
    userId: 'd9070007-b582-4b6f-a7ce-1d2b1786040e',
    email: 'Carlotta71@hotmail.com',
    password: 'ihDQ_LgKK8f1A2T',
    phone: '+85268884832',
    role: 'user'
  },
  {
    userId: '3898d4e3-fe29-4a35-8f50-ba0c8b098de8',
    email: 'Rafael_Watsica@gmail.com',
    password: 'FqNVbHo7q0ZMy14',
    phone: '+85253520607',
    role: 'user'
  },
  {
    userId: 'dabd9ca6-cdb4-46bf-9298-7bc03f936635',
    email: 'Abelardo_Beatty50@gmail.com',
    password: 'ek5rvY0VtHYVUyS',
    phone: '+85277511533',
    role: 'admin'
  },
  {
    userId: '299ce396-4a5b-4a97-b312-2ce139afc0a5',
    email: 'Vern_Boyle@yahoo.com',
    password: 'oVokQJevJ1LWYsZ',
    phone: '+85233538473',
    role: 'admin'
  },
  {
    userId: '70bd35a4-e41b-4e7c-a0c6-b0f95298f2ab',
    email: 'Thad_White@gmail.com',
    password: 'mrT0J7by5hPavqC',
    phone: '+85292620516',
    role: 'admin'
  },
  {
    userId: 'e650ddf1-fb0a-41e3-842c-903b24383c77',
    email: 'Cassidy.Luettgen@gmail.com',
    password: 'gKGXRBCYBntOLEO',
    phone: '+85230650367',
    role: 'user'
  },
  {
    userId: '84ef64c2-a0cc-4ad1-9c5e-13f5a22f6a04',
    email: 'Hassan.Funk0@hotmail.com',
    password: 'NrbN8EPCgl5PnsA',
    phone: '+85206103652',
    role: 'admin'
  },
  {
    userId: 'c46e7b80-2779-4eec-b988-10bc528bc98f',
    email: 'Wanda73@yahoo.com',
    password: 'WDbusA7M8koirIC',
    phone: '+85230922764',
    role: 'user'
  },
  {
    userId: '84bd296a-7092-4ef1-9bba-47ace70eeacd',
    email: 'Ryleigh27@gmail.com',
    password: 'LcH6kc5x181XLiO',
    phone: '+85225673393',
    role: 'admin'
  },
  {
    userId: '6026bdfa-8a9c-477e-8107-792242ae6e02',
    email: 'Christian18@gmail.com',
    password: 'GPwGy2hLcvUOIu3',
    phone: '+85211736237',
    role: 'user'
  }
];

const usersCollection = db.collection('users');

usersData.forEach(userData => {
  const docRef = usersCollection.doc(userData.userId);
  batch.set(docRef, userData);
});



const animalsData = [
  {
    animalId: '8e03fc99-823b-41e3-959e-d27c23ce9b51',
    gender: 'male',
    age: 1,
    breed: 'Bulldog',
    type: 'cat',
    color: 'pink',
    neuteredStatus: 'no',
    healthStatus: 'healthy',
    description: 'Vulnero explicabo deleniti perspiciatis.',
    nickName: 'Erna',
    image: 'https://picsum.photos/seed/ltUNyLpP/640/480',
    album: [
      'https://picsum.photos/seed/hrcN712eZx/640/480',
      'https://picsum.photos/seed/6fIGavq1y/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3592,
    longitude: 113.8582
  },
  {
    animalId: '1d4e9099-8afd-4271-a41b-ddccf46a4944',
    gender: 'male',
    age: 1,
    breed: 'Kuvasz',
    type: 'dog',
    color: 'white',
    neuteredStatus: 'yes',
    healthStatus: 'injured',
    description: 'Tendo appello cariosus bellum cogo atrocitas aduro magnam administratio aspernatur.',
    nickName: 'Crawford',
    image: 'https://picsum.photos/seed/KDw8FRMPq/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=8920183343153152',
      'https://picsum.photos/seed/GbfUa77Kgf/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3751,
    longitude: 113.8071
  },
  {
    animalId: '7817b329-a928-4991-bdd3-d919faf1ccfa',
    gender: 'female',
    age: 1,
    breed: 'Japanese Bobtail',
    type: 'dog',
    color: 'ivory',
    neuteredStatus: 'no',
    healthStatus: 'sick',
    description: 'Videlicet turpis aeger vorax.',
    nickName: 'Maxwell',
    image: 'https://loremflickr.com/640/480?lock=2703917450264576',
    album: [
      'https://picsum.photos/seed/nwbhM/640/480',
      'https://picsum.photos/seed/poju7w/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2651,
    longitude: 114.0735
  },
  {
    animalId: 'a3cf7731-571a-4c5c-bb49-8ba5d26106f0',
    gender: 'female',
    age: 7,
    breed: 'Labrador Retriever',
    type: 'dog',
    color: 'red',
    neuteredStatus: 'no',
    healthStatus: 'healthy',
    description: 'Somniculosus decumbo amplexus sol terebro.',
    nickName: 'Joel',
    image: 'https://loremflickr.com/640/480?lock=8104095642550272',
    album: [
      'https://loremflickr.com/640/480?lock=5520251416477696',
      'https://picsum.photos/seed/2haBkwv1bR/640/480',
      'https://loremflickr.com/640/480?lock=6476578483601408',
      'https://picsum.photos/seed/KRb1Mncww0/640/480',
      'https://picsum.photos/seed/tiqPknz/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2602,
    longitude: 113.9851
  },
  {
    animalId: '9842d61e-061a-41e4-913b-fe288761c9f4',
    gender: 'male',
    age: 13,
    breed: 'American Shorthair',
    type: 'dog',
    color: 'lime',
    neuteredStatus: 'no',
    healthStatus: 'sick',
    description: 'Cresco venio derelinquo quod umquam.',
    nickName: 'Mariano',
    image: 'https://picsum.photos/seed/uyin8ORu/640/480',
    album: [
      'https://picsum.photos/seed/w4zM0bt83/640/480',
      'https://picsum.photos/seed/qvwBZM6hXC/640/480',
      'https://picsum.photos/seed/m9opJk/640/480',
      'https://picsum.photos/seed/2n6RNpCTl/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2284,
    longitude: 113.8988
  },
  {
    animalId: 'f41618fa-f71a-4e43-918b-ff5ffb92cbed',
    gender: 'female',
    age: 15,
    breed: 'Westphalian Dachsbracke',
    type: 'dog',
    color: 'turquoise',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Socius studio crustulum ustilo.',
    nickName: 'Jacquelyn',
    image: 'https://picsum.photos/seed/KR9QCS/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=2741854271438848',
      'https://picsum.photos/seed/EWeJGA4Iq/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2681,
    longitude: 113.8886
  },
  {
    animalId: 'cf28d6b3-9731-42a5-a38d-c74a7d354490',
    gender: 'female',
    age: 2,
    breed: 'Turkish Angora',
    type: 'cat',
    color: 'indigo',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Audentia tener attollo depulso nisi auxilium valde officiis depereo.',
    nickName: 'Mayra',
    image: 'https://loremflickr.com/640/480?lock=4936337419403264',
    album: [
      'https://loremflickr.com/640/480?lock=2060310638755840',
      'https://picsum.photos/seed/gClfD3Ze/640/480',
      'https://picsum.photos/seed/Ke0v3vZVY/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2553,
    longitude: 113.8023
  },
  {
    animalId: 'cc78264e-0c28-4a06-a906-1c3b0e3a8e7f',
    gender: 'female',
    age: 5,
    breed: 'Cairn Terrier',
    type: 'cat',
    color: 'lime',
    neuteredStatus: 'yes',
    healthStatus: 'sick',
    description: 'Tyrannus ager coepi convoco cupressus velit.',
    nickName: 'Tamara',
    image: 'https://loremflickr.com/640/480?lock=6606296157519872',
    album: [
      'https://loremflickr.com/640/480?lock=670446919876608',
      'https://picsum.photos/seed/xBjRjR9DF/640/480',
      'https://loremflickr.com/640/480?lock=8677785901989888',
      'https://picsum.photos/seed/V0aEcEIZaz/640/480',
      'https://picsum.photos/seed/AXv21vQ/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.4602,
    longitude: 113.8658
  },
  {
    animalId: '80c6d5eb-ed85-4860-ab3a-52cefcdb8c17',
    gender: 'female',
    age: 13,
    breed: 'Bhotia',
    type: 'dog',
    color: 'purple',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Ademptio comparo sapiente vobis ratione combibo cognatus asporto valde creator.',
    nickName: 'Santa',
    image: 'https://picsum.photos/seed/mYXdcTKgW/640/480',
    album: [ 'https://loremflickr.com/640/480?lock=5085374330175488' ],
    voiceSample: '',
    video: '',
    latitude: 22.4805,
    longitude: 114.2035
  },
  {
    animalId: '53b168fc-8d04-4eca-a229-5f59c5fe5e40',
    gender: 'male',
    age: 5,
    breed: 'Kanni',
    type: 'cat',
    color: 'pink',
    neuteredStatus: 'no',
    healthStatus: 'healthy',
    description: 'Conatus absque enim.',
    nickName: 'Sarina',
    image: 'https://picsum.photos/seed/FYKiCU4Q/640/480',
    album: [ 'https://loremflickr.com/640/480?lock=290816494927872' ],
    voiceSample: '',
    video: '',
    latitude: 22.2848,
    longitude: 113.9415
  },
  {
    animalId: '92300c20-e2e1-44ff-9135-ce78ae27b5fb',
    gender: 'male',
    age: 7,
    breed: 'Abyssinian',
    type: 'dog',
    color: 'mint green',
    neuteredStatus: 'no',
    healthStatus: 'sick',
    description: 'Auctor triumphus tripudio canto tabgo solum nobis comptus.',
    nickName: 'Daisha',
    image: 'https://picsum.photos/seed/odHMB/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=840902685753344',
      'https://loremflickr.com/640/480?lock=6264226632957952',
      'https://loremflickr.com/640/480?lock=2146169513836544'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.4681,
    longitude: 113.9736
  },
  {
    animalId: '34c5460d-715e-481e-ac1f-16e1612bcc6c',
    gender: 'female',
    age: 7,
    breed: 'Bombay',
    type: 'dog',
    color: 'fuchsia',
    neuteredStatus: 'yes',
    healthStatus: 'healthy',
    description: 'Traho arbor statim suffoco acceptus advenio cicuta vomica campana verecundia.',
    nickName: 'Pasquale',
    image: 'https://loremflickr.com/640/480?lock=8176725995290624',
    album: [
      'https://loremflickr.com/640/480?lock=7089366866329600',
      'https://picsum.photos/seed/FhGo6bLMsS/640/480',
      'https://loremflickr.com/640/480?lock=1566629685100544'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.321,
    longitude: 113.9129
  },
  {
    animalId: '4a9dee04-bad8-48ee-a702-23360c651417',
    gender: 'female',
    age: 7,
    breed: 'Seppala Siberian Sleddog',
    type: 'dog',
    color: 'pink',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Sodalitas dolores vinum theca eligendi.',
    nickName: 'Guadalupe',
    image: 'https://loremflickr.com/640/480?lock=1562141064691712',
    album: [
      'https://picsum.photos/seed/CghVK/640/480',
      'https://loremflickr.com/640/480?lock=2131862963093504',
      'https://picsum.photos/seed/41RbH/640/480',
      'https://loremflickr.com/640/480?lock=6799730375917568'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2786,
    longitude: 113.9377
  },
  {
    animalId: '45c12a44-28fe-4ed2-9927-d8a7f047df36',
    gender: 'female',
    age: 13,
    breed: 'Birman',
    type: 'dog',
    color: 'pink',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Arbor spero coepi cunctatio uterque abscido infit textor possimus ambitus.',
    nickName: 'Carley',
    image: 'https://picsum.photos/seed/C4rjKCbQL/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=1041422255915008',
      'https://picsum.photos/seed/jfwj3I/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.283,
    longitude: 113.9637
  },
  {
    animalId: '29132f15-3240-4e6b-8442-e8c5a63b54ca',
    gender: 'female',
    age: 14,
    breed: 'Ocicat',
    type: 'cat',
    color: 'black',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Vallum beatae enim.',
    nickName: 'Golda',
    image: 'https://loremflickr.com/640/480?lock=5444345408782336',
    album: [ 'https://loremflickr.com/640/480?lock=3696443328036864' ],
    voiceSample: '',
    video: '',
    latitude: 22.373,
    longitude: 114.279
  },
  {
    animalId: '191ce5b7-f3db-4385-bb11-8d49e2ddd55f',
    gender: 'male',
    age: 9,
    breed: 'Balinese',
    type: 'cat',
    color: 'magenta',
    neuteredStatus: 'no',
    healthStatus: 'sick',
    description: 'Utilis ipsum repudiandae conqueror conitor vomito asperiores adsidue repellat officia.',
    nickName: 'Jamison',
    image: 'https://picsum.photos/seed/bTdgtf/640/480',
    album: [ 'https://picsum.photos/seed/ST8ca/640/480' ],
    voiceSample: '',
    video: '',
    latitude: 22.4073,
    longitude: 114.2
  },
  {
    animalId: '99c6aaaa-85de-4ec4-9b19-52964ec6ebaf',
    gender: 'female',
    age: 6,
    breed: 'Abyssinian',
    type: 'dog',
    color: 'orange',
    neuteredStatus: 'yes',
    healthStatus: 'sick',
    description: 'Defluo alioqui terga incidunt ipsam somniculosus termes turbo corroboro error.',
    nickName: 'Violette',
    image: 'https://picsum.photos/seed/j9rNuzij3/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=1231139947675648',
      'https://picsum.photos/seed/ZML7VpQsZ/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.4107,
    longitude: 113.8933
  },
  {
    animalId: '3ae254a7-5904-4fe5-8986-cd5db3455548',
    gender: 'female',
    age: 8,
    breed: 'Pražský Krysařík',
    type: 'cat',
    color: 'magenta',
    neuteredStatus: 'no',
    healthStatus: 'healthy',
    description: 'Dens cotidie atqui tredecim corporis delinquo fugiat voluptatum adhaero stips.',
    nickName: 'Emory',
    image: 'https://picsum.photos/seed/Hhdg6YF2xQ/640/480',
    album: [ 'https://picsum.photos/seed/vIong5Q/640/480' ],
    voiceSample: '',
    video: '',
    latitude: 22.2363,
    longitude: 114.1398
  },
  {
    animalId: '22200aea-9155-48af-9731-b2c374b19fb5',
    gender: 'female',
    age: 11,
    breed: 'Norrbottenspets',
    type: 'cat',
    color: 'azure',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Patria urbs tero theatrum.',
    nickName: 'Stacey',
    image: 'https://loremflickr.com/640/480?lock=1468989410639872',
    album: [
      'https://picsum.photos/seed/kFMc2V/640/480',
      'https://loremflickr.com/640/480?lock=7959868027699200'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.4057,
    longitude: 114.1685
  },
  {
    animalId: '5a66eb4d-1d39-4075-8407-43ad37472ddc',
    gender: 'male',
    age: 2,
    breed: 'Siberian',
    type: 'cat',
    color: 'orchid',
    neuteredStatus: 'no',
    healthStatus: 'sick',
    description: 'Totam charisma caelum triumphus caute cunae aer demens tersus claustrum.',
    nickName: 'Gilbert',
    image: 'https://loremflickr.com/640/480?lock=4759517462003712',
    album: [
      'https://picsum.photos/seed/SyHann/640/480',
      'https://loremflickr.com/640/480?lock=1441079459053568'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3191,
    longitude: 114.0333
  }
]

const animalsCollection = db.collection('animals');

animalsData.forEach(animalData => {
  const docRef = animalsCollection.doc(animalData.animalId);
  batch.set(docRef, animalData);
});




const camerasData = [
  {
    cameraId: '5c67cdd4-26ae-4cb3-b3c9-382c0ebd8863',
    ip: '217.8.154.247',
    latitude: 22.228,
    longitude: 114.2224,
    url: 'https://cultivated-steam.name',
    startTime: 1714034633186
  },
  {
    cameraId: '08e9690b-e4f9-4c56-8b96-3b25272bf183',
    ip: 'b5e3:bfac:b0e3:32c1:537a:70ff:1ac5:effc',
    latitude: 22.3796,
    longitude: 114.0529,
    url: 'https://wavy-waiting.name',
    startTime: 1714074739781
  },
  {
    cameraId: 'c797487e-5d48-4450-a65d-48814a45f94b',
    ip: 'ffb0:0b1a:3fbf:e70b:ef46:31fc:feb3:3db7',
    latitude: 22.2007,
    longitude: 113.8324,
    url: 'https://cloudy-dirt.com',
    startTime: 1714052709178
  },
  {
    cameraId: '8ee1c280-4ccb-40a6-afb7-bdccf25b3184',
    ip: '138.197.4.221',
    latitude: 22.4326,
    longitude: 113.8561,
    url: 'https://parallel-patrol.net',
    startTime: 1714000475675
  },
  {
    cameraId: 'c1d0b994-1518-46ce-b8ad-1d02f5a23669',
    ip: '74.146.217.202',
    latitude: 22.2899,
    longitude: 114.1011,
    url: 'https://supportive-spirit.name/',
    startTime: 1714071485440
  },
  {
    cameraId: 'be94a1ae-c537-488a-ba99-a5fc85085ed5',
    ip: '9ead:bf5b:d984:49f2:c42f:94d7:0a00:5ed9',
    latitude: 22.2373,
    longitude: 114.2084,
    url: 'https://lighthearted-watermelon.org/',
    startTime: 1714039626026
  },
  {
    cameraId: '9bc2fb65-7df0-4c80-941b-61f321d6e18d',
    ip: '3d6f:8a8f:603a:4bde:1e6f:cc16:e7db:ea85',
    latitude: 22.298,
    longitude: 114.2587,
    url: 'https://helpful-guacamole.net',
    startTime: 1714078603540
  },
  {
    cameraId: 'daeb58ff-95d4-4864-8965-39b35d064849',
    ip: 'fff2:bf3b:2dab:a0d0:c15b:fec0:e7c0:8ff1',
    latitude: 22.4532,
    longitude: 113.8168,
    url: 'https://gaseous-subway.com',
    startTime: 1714062132884
  },
  {
    cameraId: '3301152a-a186-4b97-ad53-e4ce19f2279e',
    ip: '144.113.217.107',
    latitude: 22.401,
    longitude: 114.0135,
    url: 'https://french-caramel.org/',
    startTime: 1713993325059
  },
  {
    cameraId: '2acf6d86-b259-4d28-baac-d2bce5b57e89',
    ip: '8c38:ea85:51dd:cb07:fb2d:381d:db4d:2c0b',
    latitude: 22.2009,
    longitude: 113.8624,
    url: 'https://immaterial-bifocals.org',
    startTime: 1714066084874
  }
]

const camerasCollection = db.collection('cameras');

camerasData.forEach(cameraData => {
  const docRef = camerasCollection.doc(cameraData.cameraId);
  batch.set(docRef, cameraData);
});




const reportsData = [
  {
    userId: '55e3485d-99a6-4eb6-b496-9697e3ef057d',
    reportId: '796d70de-c0fe-44e8-a991-c798f5dd2c4f',
    gender: 'female',
    age: 15,
    breed: 'Turkish Van',
    type: 'dog',
    color: 'magenta',
    neuteredStatus: 'no',
    healthStatus: 'healthy',
    description: 'Videlicet baiulus vero neque aggero conservo audacia audeo tergiversatio.',
    nickName: 'Marcelino',
    image: 'https://loremflickr.com/640/480?lock=5750712841535488',
    album: [
      'https://loremflickr.com/640/480?lock=3339382289334272',
      'https://loremflickr.com/640/480?lock=1608342803841024',
      'https://picsum.photos/seed/YuRLSlc/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2318,
    longitude: 114.1529,
    timestamp: 1714162492651
  },
  {
    userId: '6b01b58b-f97a-445c-8645-63193d32b084',
    reportId: '64d54f91-8046-4bff-b4fa-22a05ddc2cc8',
    gender: 'male',
    age: 2,
    breed: 'East Siberian Laika',
    type: 'dog',
    color: 'plum',
    neuteredStatus: 'yes',
    healthStatus: 'injured',
    description: 'Tondeo adipisci aut tametsi excepturi subvenio correptius creber.',
    nickName: 'Mose',
    image: 'https://picsum.photos/seed/QZGrbh/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=2358353651040256',
      'https://picsum.photos/seed/rVPceOvw/640/480',
      'https://loremflickr.com/640/480?lock=7800496389619712'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3029,
    longitude: 114.0713,
    timestamp: 1714161218646
  },
  {
    userId: '9f427e1e-7981-44a5-a930-f552df83eda6',
    reportId: '1074e6a7-dce4-4b11-b333-6b1e4276a144',
    gender: 'female',
    age: 12,
    breed: 'Maremmano-Abruzzese Sheepdog',
    type: 'cat',
    color: 'orange',
    neuteredStatus: 'yes',
    healthStatus: 'injured',
    description: 'Quo denuncio conor nemo conturbo peior.',
    nickName: 'Kraig',
    image: 'https://loremflickr.com/640/480?lock=2874928630071296',
    album: [
      'https://picsum.photos/seed/vW73n/640/480',
      'https://loremflickr.com/640/480?lock=4153357180600320',
      'https://picsum.photos/seed/i5vegAE4sC/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.4494,
    longitude: 114.1699,
    timestamp: 1714114423784
  },
  {
    userId: '8ea2eaf6-1468-4a73-8f6b-3fc6e69677a2',
    reportId: 'ec2478a0-a594-4de1-9c2e-0162e92a5bb2',
    gender: 'female',
    age: 1,
    breed: 'English Shepherd',
    type: 'cat',
    color: 'violet',
    neuteredStatus: 'yes',
    healthStatus: 'injured',
    description: 'Adicio sum degusto volutabrum cupiditate trado vallum apto.',
    nickName: 'Darrell',
    image: 'https://picsum.photos/seed/L33L0a9/640/480',
    album: [
      'https://picsum.photos/seed/0tdrZRyHMV/640/480',
      'https://picsum.photos/seed/FaHGcOJRoJ/640/480',
      'https://loremflickr.com/640/480?lock=7080731446607872'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.4963,
    longitude: 113.9471,
    timestamp: 1714097134082
  },
  {
    userId: '60910d66-6572-4fd3-8a43-fccaef566e21',
    reportId: '930c1fa5-a927-4689-b9fd-7e8be3f62151',
    gender: 'female',
    age: 4,
    breed: 'Chongqing dog',
    type: 'cat',
    color: 'lavender',
    neuteredStatus: 'no',
    healthStatus: 'healthy',
    description: 'Volva avarus quas caveo pectus socius stella vigor tyrannus adficio.',
    nickName: 'Alana',
    image: 'https://picsum.photos/seed/swAWa8/640/480',
    album: [
      'https://picsum.photos/seed/NOmhZPjad/640/480',
      'https://picsum.photos/seed/Q3tOO/640/480',
      'https://loremflickr.com/640/480?lock=7273353807134720'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3916,
    longitude: 113.9851,
    timestamp: 1714133003351
  },
  {
    userId: '7e271c81-7582-4b8e-9017-f6dd8466a8c5',
    reportId: '81b9e8bd-0947-4813-965e-5200727a934e',
    gender: 'male',
    age: 10,
    breed: 'Danish-Swedish Farmdog',
    type: 'dog',
    color: 'green',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Carpo beatus laudantium ipsa fuga coepi tepidus cohors cunctatio.',
    nickName: 'Lydia',
    image: 'https://loremflickr.com/640/480?lock=5315013120098304',
    album: [
      'https://picsum.photos/seed/jBfHLZsq/640/480',
      'https://loremflickr.com/640/480?lock=5734421208498176',
      'https://loremflickr.com/640/480?lock=1458969524568064'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.4419,
    longitude: 114.0105,
    timestamp: 1714140786896
  },
  {
    userId: '878a764b-71b0-4e8a-aec7-704666fb1ae7',
    reportId: '7b5e006b-b50b-4c8f-99c3-2e2549581cea',
    gender: 'male',
    age: 1,
    breed: 'Tonkinese',
    type: 'dog',
    color: 'azure',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Carcer sui utroque votum thermae talus cerno tantillus.',
    nickName: "D'angelo",
    image: 'https://picsum.photos/seed/F8IxrQXSV/640/480',
    album: [
      'https://picsum.photos/seed/DbSqB/640/480',
      'https://picsum.photos/seed/8vtRUDTQ/640/480',
      'https://loremflickr.com/640/480?lock=8580022243688448'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3798,
    longitude: 114.2249,
    timestamp: 1714119526615
  }
]

const reportsCollection = db.collection('reports');

reportsData.forEach(reportData => {
  const docRef = reportsCollection.doc();
  batch.set(docRef, reportData);
});



const animalHLSData = [
  {
    id: '1abed792-f3f2-4448-9c43-6f44cc15e5c7',
    url: 'https://awesome-guestbook.info',
    animalId: 'cbebd270-0046-4be3-bf37-2d3c68217092',
    AppearDate: '2024-4-26',
    AppearTime: 1714040768537,
    DisappearDate: '2024-4-26',
    DisappearTime: 1714076416822
  },
  {
    id: 'e57961fc-b913-400f-9ffa-aa1c01db671a',
    url: 'https://repulsive-leading.info',
    animalId: 'c9c0d6a9-8576-4b6c-a117-ad29bbc79608',
    AppearDate: '2024-4-26',
    AppearTime: 1714094116909,
    DisappearDate: '2024-4-26',
    DisappearTime: 1714137512921
  },
  {
    id: '023af559-8106-490c-9e87-d4785a01cdb5',
    url: 'https://quaint-sound.net',
    animalId: '27f30a76-8b2c-4814-b2df-dacc0076db6d',
    AppearDate: '2024-4-26',
    AppearTime: 1714119538558,
    DisappearDate: '2024-4-26',
    DisappearTime: 1714138705517
  },
  {
    id: 'a1758340-f30c-4260-b4e6-0865f87278b2',
    url: 'https://exemplary-gong.biz/',
    animalId: '583ede58-75d7-4b45-8096-2f342daa6a83',
    AppearDate: '2024-4-26',
    AppearTime: 1714071886459,
    DisappearDate: '2024-4-26',
    DisappearTime: 1714138052780
  },
  {
    id: '3e4155c1-0625-408b-a34b-eb095111769d',
    url: 'https://grumpy-warlock.biz',
    animalId: '06b54846-a1e2-4864-bd92-47c4b9d0675f',
    AppearDate: '2024-4-26',
    AppearTime: 1714104301457,
    DisappearDate: '2024-4-26',
    DisappearTime: 1714147558988
  },
  {
    id: '4a7397b1-932a-412f-883b-d0442817812e',
    url: 'https://golden-dignity.name/',
    animalId: '68d432bf-63da-4782-be90-0a1210ca9939',
    AppearDate: '2024-4-26',
    AppearTime: 1714046686752,
    DisappearDate: '2024-4-26',
    DisappearTime: 1714116843459
  },
  {
    id: 'bc4fafb3-4c60-4fb0-b82a-29dfddc18d43',
    url: 'https://trim-overweight.info/',
    animalId: '67b85979-ffa9-4a1b-b785-62a5696706b5',
    AppearDate: '2024-4-26',
    AppearTime: 1714024809284,
    DisappearDate: '2024-4-26',
    DisappearTime: 1714070536217
  },
  {
    id: '8504a26b-970d-4806-9f28-569e1ad2f90f',
    url: 'https://faithful-attraction.org/',
    animalId: '3d4f0946-8138-4cae-b519-df775243cb45',
    AppearDate: '2024-4-26',
    AppearTime: 1714040286629,
    DisappearDate: '2024-4-26',
    DisappearTime: 1714075016084
  },
  {
    id: '6fc11bd3-b319-4822-b980-b0fb668018ba',
    url: 'https://variable-pronoun.net/',
    animalId: '8e03fc99-823b-41e3-959e-d27c23ce9b51',
    AppearDate: '2024-4-26',
    AppearTime: 1714067701797,
    DisappearDate: '2024-4-26',
    DisappearTime: 1714131341731
  },
  {
    id: '6300b6da-f4c1-4f0e-976a-6fe45e41f564',
    url: 'https://opulent-bookend.info',
    animalId: '8e03fc99-823b-41e3-959e-d27c23ce9b51',
    AppearDate: '2024-4-26',
    AppearTime: 1714104735221,
    DisappearDate: '2024-4-26',
    DisappearTime: 1714119646210
  }
]

const animalHLSCollection = db.collection('animalHLS');

animalHLSData.forEach(animalHLS => {
  const docRef = animalHLSCollection.doc(animalHLS.id);
  batch.set(docRef, animalHLS);
});





// Commit the batch
batch.commit()
  .then(() => {
    console.log('Batch write successful!');
  })
  .catch((error) => {
    console.error('Error writing documents: ', error);
  });