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
    userId: '6be361ac-84b7-448f-8259-d1337b828a08',
    gender: 'female',
    age: 14,
    breed: 'German Wirehaired Pointer',
    type: 'dog',
    color: 'white',
    neuteredStatus: 'no',
    healthStatus: 'sick',
    description: 'Denuncio pauper ducimus.',
    nickName: 'Felipa',
    image: 'https://picsum.photos/seed/iWX1bUnS9/640/480',
    album: [
      'https://picsum.photos/seed/Qcytk/640/480',
      'https://picsum.photos/seed/UV04o/640/480',
      'https://loremflickr.com/640/480?lock=2238966065528832'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3119,
    longitude: 114.0243,
    timestamp: 1714044860313
  },
  {
    userId: '10f7f3c8-3478-4674-ad1d-3fb01009e2d0',
    gender: 'male',
    age: 13,
    breed: 'Thai',
    type: 'cat',
    color: 'grey',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Praesentium crapula utilis debitis depulso terra.',
    nickName: 'Reagan',
    image: 'https://loremflickr.com/640/480?lock=6361818494664704',
    album: [
      'https://loremflickr.com/640/480?lock=7091859304218624',
      'https://picsum.photos/seed/zNd9eV/640/480',
      'https://loremflickr.com/640/480?lock=2457721659981824'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3138,
    longitude: 114.1943,
    timestamp: 1714043933148
  },
  {
    userId: '895e80a3-bb2c-4410-b2eb-20ffe7aac735',
    gender: 'female',
    age: 12,
    breed: 'Hygen Hound',
    type: 'cat',
    color: 'black',
    neuteredStatus: 'yes',
    healthStatus: 'sick',
    description: 'Sopor cervus adimpleo curso ustilo caelestis sonitus cerno.',
    nickName: 'Dylan',
    image: 'https://loremflickr.com/640/480?lock=798171691220992',
    album: [
      'https://picsum.photos/seed/LgPjd/640/480',
      'https://picsum.photos/seed/9DfzL/640/480',
      'https://loremflickr.com/640/480?lock=2031026939363328'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3192,
    longitude: 114.1691,
    timestamp: 1714028619871
  },
  {
    userId: '07ec9d66-0eed-4ab4-bccf-ec3032d05ece',
    gender: 'female',
    age: 2,
    breed: 'Bengal',
    type: 'dog',
    color: 'cyan',
    neuteredStatus: 'yes',
    healthStatus: 'sick',
    description: 'Aequitas sunt vorago consequuntur confugo conscendo textilis veniam nesciunt deficio.',
    nickName: 'Chadd',
    image: 'https://picsum.photos/seed/IJx1erJFgX/640/480',
    album: [
      'https://picsum.photos/seed/mCMZZiHEso/640/480',
      'https://picsum.photos/seed/LuLSI7UVC/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2342,
    longitude: 113.8935,
    timestamp: 1714047033670
  },
  {
    userId: 'b39c6fff-b95b-442d-8716-905a2c6b5225',
    gender: 'male',
    age: 12,
    breed: 'King Shepherd',
    type: 'cat',
    color: 'lime',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Deleo damnatio universe tener alias ulciscor enim brevis spoliatio.',
    nickName: 'Mitchel',
    image: 'https://picsum.photos/seed/NLzO4t8u/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=4964704757743616',
      'https://loremflickr.com/640/480?lock=7419021951500288',
      'https://picsum.photos/seed/zrAc3/640/480',
      'https://loremflickr.com/640/480?lock=2072210531418112'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3589,
    longitude: 114.2606,
    timestamp: 1714063529919
  },
  {
    userId: '08ea27be-731b-4371-84b6-a13b9157b8df',
    gender: 'female',
    age: 5,
    breed: 'Siamese',
    type: 'cat',
    color: 'fuchsia',
    neuteredStatus: 'no',
    healthStatus: 'sick',
    description: 'Utpote vos decimus cauda ratione vesco subvenio venio tam tergeo.',
    nickName: 'Hunter',
    image: 'https://picsum.photos/seed/IQNppEgdjZ/640/480',
    album: [
      'https://picsum.photos/seed/tU76SfGQ/640/480',
      'https://picsum.photos/seed/Z3U1fr/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3586,
    longitude: 113.9028,
    timestamp: 1714023546180
  },
  {
    userId: '30039a14-342c-4057-803c-17acdc283eb4',
    gender: 'male',
    age: 2,
    breed: 'Mackenzie River Husky',
    type: 'cat',
    color: 'plum',
    neuteredStatus: 'yes',
    healthStatus: 'healthy',
    description: 'Cogo atavus varius ante.',
    nickName: 'Tom',
    image: 'https://loremflickr.com/640/480?lock=8919893684518912',
    album: [
      'https://picsum.photos/seed/6DlP4C/640/480',
      'https://loremflickr.com/640/480?lock=1201816614207488'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.222,
    longitude: 114.1191,
    timestamp: 1714020936797
  }
]

const reportsCollection = db.collection('reports');

reportsData.forEach(reportData => {
  const docRef = reportsCollection.doc();
  batch.set(docRef, reportData);
});



const animalHLSData = [
  {
    url: 'https://virtual-ladle.name/',
    animalId: '62367e98-e297-4f2a-b26b-ba3362d8317c',
    AppearDate: '2024-4-25',
    AppearTime: 1714029129166,
    DisappearDate: '2024-4-25',
    DisappearTime: 1714078851055
  },
  {
    url: 'https://reliable-orange.net',
    animalId: '87dd7ae8-be2a-49b5-b553-0f0f1db6ffe7',
    AppearDate: '2024-4-25',
    AppearTime: 1714018589495,
    DisappearDate: '2024-4-25',
    DisappearTime: 1714019138501
  },
  {
    url: 'https://troubled-order.com/',
    animalId: '43f08be1-8f0c-4440-b156-70f6a93cadad',
    AppearDate: '2024-4-25',
    AppearTime: 1714007813524,
    DisappearDate: '2024-4-25',
    DisappearTime: 1714009636734
  },
  {
    url: 'https://multicolored-manservant.info/',
    animalId: 'a1146a67-1b17-481c-82d5-29f7518725a9',
    AppearDate: '2024-4-25',
    AppearTime: 1713972924823,
    DisappearDate: '2024-4-25',
    DisappearTime: 1714052033829
  },
  {
    url: 'https://jumpy-backbone.net',
    animalId: '1839583c-ed97-451f-af02-b4f177e43d56',
    AppearDate: '2024-4-25',
    AppearTime: 1713965453458,
    DisappearDate: '2024-4-26',
    DisappearTime: 1714016503811
  },
  {
    url: 'https://yawning-exhaust.info',
    animalId: 'cd0f2689-10de-4c6e-87eb-1f0c4b29c95d',
    AppearDate: '2024-4-25',
    AppearTime: 1714068886358,
    DisappearDate: '2024-4-25',
    DisappearTime: 1714076345891
  },
  {
    url: 'https://mammoth-menu.biz/',
    animalId: '01161d0a-bbc9-4694-8aae-a2fd9e196ae1',
    AppearDate: '2024-4-25',
    AppearTime: 1713991841896,
    DisappearDate: '2024-4-25',
    DisappearTime: 1714075976115
  },
  {
    url: 'https://formal-seal.org/',
    animalId: '168d2831-3683-4929-94e9-2e179debcfb4',
    AppearDate: '2024-4-26',
    AppearTime: 1713981944701,
    DisappearDate: '2024-4-25',
    DisappearTime: 1714029920537
  },
  {
    url: 'https://charming-tab.name/',
    animalId: 'add06899-52df-4373-9996-2125d3def94d',
    AppearDate: '2024-4-25',
    AppearTime: 1714005365322,
    DisappearDate: '2024-4-26',
    DisappearTime: 1714060242459
  },
  {
    url: 'https://giving-rest.com/',
    animalId: '3d7944e5-6455-4230-b313-45d722494bf1',
    AppearDate: '2024-4-25',
    AppearTime: 1713996661692,
    DisappearDate: '2024-4-25',
    DisappearTime: 1713999397527
  }
]

const animalHLSCollection = db.collection('animalHLS');

animalHLSData.forEach(animalHLS => {
  const docRef = animalHLSCollection.doc();
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