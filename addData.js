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
    animalId: 'e8707c30-b6e3-40d1-abb7-ea1768ad2556',
    gender: 'male',
    age: 9,
    breed: 'Coton de Tulear',
    type: 'dog',
    color: 'salmon',
    neuteredStatus: 'no',
    healthStatus: 'healthy',
    description: 'Votum ubi copia sumptus delinquo decimus tenetur.',
    nickName: 'Jarrett',
    image: 'https://loremflickr.com/640/480?lock=1215724309708800',
    album: [
      'https://picsum.photos/seed/26sH0ptc/640/480',
      'https://loremflickr.com/640/480?lock=3927008534855680',
      'https://loremflickr.com/640/480?lock=8775466588569600'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.390873,
    longitude: 114.198035
  },
  {
    animalId: '60de9d86-703d-4ce3-a8a3-7cef3cbefc7b',
    gender: 'female',
    age: 10,
    breed: 'Sokoke',
    type: 'cat',
    color: 'silver',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Avaritia doloremque quos ea complectus vomito.',
    nickName: 'Ronny',
    image: 'https://loremflickr.com/640/480?lock=5565372136685568',
    album: [
      'https://loremflickr.com/640/480?lock=1433971734872064',
      'https://loremflickr.com/640/480?lock=3640706312699904',
      'https://loremflickr.com/640/480?lock=4129123733602304'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.394873,
    longitude: 114.198035
  },
  {
    animalId: '63ae09c9-b36d-4262-a2d8-3a8ca9144cb9',
    gender: 'female',
    age: 11,
    breed: 'Paisley Terrier',
    type: 'cat',
    color: 'magenta',
    neuteredStatus: 'no',
    healthStatus: 'sick',
    description: 'Perferendis compello corporis carcer rem aeger adversus conicio aliquid saepe.',
    nickName: 'Carlee',
    image: 'https://picsum.photos/seed/jkBZWbJ8VM/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=915161256820736',
      'https://picsum.photos/seed/DDXOBTz/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.393873,
    longitude: 114.202035
  },
  {
    animalId: '064b23c9-fade-4808-afe6-d732ead90071',
    gender: 'female',
    age: 3,
    breed: 'Podenco Canario',
    type: 'cat',
    color: 'purple',
    neuteredStatus: 'no',
    healthStatus: 'healthy',
    description: 'Torqueo placeat adnuo.',
    nickName: 'Shayne',
    image: 'https://loremflickr.com/640/480?lock=6470230448537600',
    album: [ 'https://loremflickr.com/640/480?lock=4810571698405376' ],
    voiceSample: '',
    video: '',
    latitude: 22.3522,
    longitude: 114.174
  },
  {
    animalId: 'b8c2caca-62e6-4ce2-adbe-1a4b0297036e',
    gender: 'male',
    age: 14,
    breed: 'Maine Coon',
    type: 'cat',
    color: 'azure',
    neuteredStatus: 'yes',
    healthStatus: 'healthy',
    description: 'Temeritas spiritus spero nostrum aliquam solum eaque.',
    nickName: 'Damion',
    image: 'https://picsum.photos/seed/ov1TEpl/640/480',
    album: [ 'https://picsum.photos/seed/rBO0mx4/640/480' ],
    voiceSample: '',
    video: '',
    latitude: 22.225,
    longitude: 114.2882
  },
  {
    animalId: 'f06d7771-e48f-4e14-bbe1-66a0e6a1137a',
    gender: 'male',
    age: 13,
    breed: 'Flat-Coated Retriever',
    type: 'cat',
    color: 'white',
    neuteredStatus: 'no',
    healthStatus: 'healthy',
    description: 'Tenuis capitulus villa delinquo civitas dolorem utpote aveho comedo venio.',
    nickName: 'Elliott',
    image: 'https://loremflickr.com/640/480?lock=5795393572962304',
    album: [
      'https://picsum.photos/seed/Y0EcciW/640/480',
      'https://picsum.photos/seed/abQx1LFhM/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.4279,
    longitude: 113.9322
  },
  {
    animalId: '7f509cb4-af49-45da-a65d-f5577e4e9b49',
    gender: 'male',
    age: 5,
    breed: 'Chartreux',
    type: 'cat',
    color: 'blue',
    neuteredStatus: 'yes',
    healthStatus: 'healthy',
    description: 'Corrigo creptio canis.',
    nickName: 'Ellsworth',
    image: 'https://loremflickr.com/640/480?lock=6723653878153216',
    album: [
      'https://picsum.photos/seed/gFCAlS/640/480',
      'https://picsum.photos/seed/R0c0HlmXN2/640/480',
      'https://loremflickr.com/640/480?lock=5923789642661888'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.4067,
    longitude: 114.024
  },
  {
    animalId: 'ccc19d3e-7433-45b0-a849-a3a9937d67fc',
    gender: 'female',
    age: 2,
    breed: 'Singapura',
    type: 'dog',
    color: 'salmon',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Tot defero tabernus solus dapifer socius.',
    nickName: 'Nayeli',
    image: 'https://picsum.photos/seed/OulvS/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=2256707847716864',
      'https://picsum.photos/seed/iPc0Xa/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.4197,
    longitude: 114.1244
  },
  {
    animalId: 'c6af1986-d6d8-4a8b-beec-cf5051da758a',
    gender: 'male',
    age: 2,
    breed: 'Bouvier des Ardennes',
    type: 'dog',
    color: 'white',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Turbo aggero optio perferendis victoria fugit.',
    nickName: 'Lafayette',
    image: 'https://picsum.photos/seed/GNO7vg2/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=582824719548416',
      'https://loremflickr.com/640/480?lock=7745883628109824',
      'https://picsum.photos/seed/fBcVL7/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2691,
    longitude: 114.0948
  },
  {
    animalId: 'b0efa2bb-ed8a-4bdd-a19a-38205cacc947',
    gender: 'male',
    age: 3,
    breed: 'Turkish Angora',
    type: 'cat',
    color: 'lime',
    neuteredStatus: 'no',
    healthStatus: 'sick',
    description: 'Voluptas culpo credo vester ab voluptates deludo.',
    nickName: 'Aileen',
    image: 'https://loremflickr.com/640/480?lock=1518876015722496',
    album: [ 'https://picsum.photos/seed/60nNMO/640/480' ],
    voiceSample: '',
    video: '',
    latitude: 22.3447,
    longitude: 113.9697
  },
  {
    animalId: '319a9bd4-efb5-462d-8431-4129e3deca49',
    gender: 'female',
    age: 2,
    breed: 'Griffon Nivernais',
    type: 'cat',
    color: 'silver',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Cena pecus ea.',
    nickName: 'Benedict',
    image: 'https://loremflickr.com/640/480?lock=1758451210387456',
    album: [
      'https://loremflickr.com/640/480?lock=346793344761856',
      'https://picsum.photos/seed/l4h5SIddP/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2938,
    longitude: 114.2388
  },
  {
    animalId: '624bbe5f-2278-468c-9d5e-65d7e1a5d77b',
    gender: 'male',
    age: 12,
    breed: 'Japanese Chin',
    type: 'dog',
    color: 'fuchsia',
    neuteredStatus: 'yes',
    healthStatus: 'healthy',
    description: 'Vigor veritas vergo.',
    nickName: 'Tomas',
    image: 'https://picsum.photos/seed/co2VHeeW7X/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=4849857684570112',
      'https://picsum.photos/seed/sRykP/640/480',
      'https://picsum.photos/seed/fwqj5sa/640/480',
      'https://picsum.photos/seed/541lpS/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2206,
    longitude: 113.9974
  },
  {
    animalId: 'cf5a575b-38d0-48a1-a62a-1ed3eed46db5',
    gender: 'male',
    age: 6,
    breed: 'Thai',
    type: 'cat',
    color: 'orange',
    neuteredStatus: 'yes',
    healthStatus: 'injured',
    description: 'Viriliter stipes adinventitias utrimque conservo cicuta crinis casus ambitus defetiscor.',
    nickName: 'Kiana',
    image: 'https://loremflickr.com/640/480?lock=212564667531264',
    album: [
      'https://picsum.photos/seed/SegFyDtDCK/640/480',
      'https://loremflickr.com/640/480?lock=7638968487116800',
      'https://loremflickr.com/640/480?lock=1988332298960896'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2507,
    longitude: 114.1978
  },
  {
    animalId: '10bd7b2d-a999-4bb2-bc90-1ffaf1c8337c',
    gender: 'female',
    age: 8,
    breed: 'Singapura',
    type: 'cat',
    color: 'maroon',
    neuteredStatus: 'no',
    healthStatus: 'healthy',
    description: 'Error usitas victus deorsum acceptus deprecator magni alias vae adduco.',
    nickName: 'Arnulfo',
    image: 'https://picsum.photos/seed/2bdsX/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=3339046652739584',
      'https://picsum.photos/seed/UBdpH/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.438,
    longitude: 113.8935
  },
  {
    animalId: '4ac408bb-bc74-4655-947e-dee5b7f590ef',
    gender: 'male',
    age: 14,
    breed: 'Kurilian Bobtail',
    type: 'dog',
    color: 'sky blue',
    neuteredStatus: 'yes',
    healthStatus: 'healthy',
    description: 'Voro delectus sordeo apparatus deputo tamen amiculum casus audacia.',
    nickName: 'Claudia',
    image: 'https://loremflickr.com/640/480?lock=7509088126631936',
    album: [
      'https://loremflickr.com/640/480?lock=6838808020516864',
      'https://picsum.photos/seed/2H9ZzfpZ/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3355,
    longitude: 114.0716
  },
  {
    animalId: '085a3a4d-bad5-431f-9d7c-f23c250476e2',
    gender: 'female',
    age: 1,
    breed: 'Russian Blue',
    type: 'dog',
    color: 'fuchsia',
    neuteredStatus: 'no',
    healthStatus: 'sick',
    description: 'Cerno vulpes officia adnuo totus aliqua assentator traho thorax viriliter.',
    nickName: 'Abdul',
    image: 'https://loremflickr.com/640/480?lock=4944961378189312',
    album: [
      'https://loremflickr.com/640/480?lock=7454952423161856',
      'https://picsum.photos/seed/upOGq/640/480',
      'https://loremflickr.com/640/480?lock=6115431276347392',
      'https://picsum.photos/seed/TtDvG/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3495,
    longitude: 114.2253
  },
  {
    animalId: '1c0dfebf-7120-4f70-875c-dcd4b4382af4',
    gender: 'female',
    age: 2,
    breed: 'Munchkin',
    type: 'cat',
    color: 'blue',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Tumultus termes cauda clarus.',
    nickName: 'Loma',
    image: 'https://picsum.photos/seed/Y3Jp7Vm/640/480',
    album: [
      'https://picsum.photos/seed/3jQMwK/640/480',
      'https://picsum.photos/seed/5CPl54bEj/640/480',
      'https://picsum.photos/seed/VxvB5L/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3197,
    longitude: 114.2471
  },
  {
    animalId: '0dd6b243-80cb-41cd-b9ff-6695649a02e1',
    gender: 'female',
    age: 13,
    breed: 'Danish-Swedish Farmdog',
    type: 'dog',
    color: 'pink',
    neuteredStatus: 'no',
    healthStatus: 'healthy',
    description: 'Thermae celebrer aspernatur.',
    nickName: 'Rico',
    image: 'https://picsum.photos/seed/q7ptPb/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=2427646145200128',
      'https://picsum.photos/seed/Xzbcwo6r/640/480',
      'https://picsum.photos/seed/FObuzApz7/640/480',
      'https://loremflickr.com/640/480?lock=280426883055616'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.3845,
    longitude: 114.0079
  },
  {
    animalId: 'bad6988b-3850-4df9-be64-65e3df4a309e',
    gender: 'male',
    age: 7,
    breed: 'Jack Russell Terrier',
    type: 'cat',
    color: 'mint green',
    neuteredStatus: 'yes',
    healthStatus: 'injured',
    description: 'Adaugeo volutabrum dolorem allatus adsum suadeo tertius charisma.',
    nickName: 'Caesar',
    image: 'https://loremflickr.com/640/480?lock=5211315255640064',
    album: [
      'https://picsum.photos/seed/rb2aYg2ZET/640/480',
      'https://picsum.photos/seed/7i1YFmQ/640/480',
      'https://loremflickr.com/640/480?lock=873539603267584'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2385,
    longitude: 114.2215
  },
  {
    animalId: '31cd4be7-75cc-4fd5-85cb-1facd1be2c1c',
    gender: 'female',
    age: 8,
    breed: 'Minskin',
    type: 'dog',
    color: 'fuchsia',
    neuteredStatus: 'no',
    healthStatus: 'healthy',
    description: 'Bonus conservo dolores vitiosus textus accedo vergo et soluta.',
    nickName: 'Caterina',
    image: 'https://loremflickr.com/640/480?lock=3663556176248832',
    album: [ 'https://picsum.photos/seed/Y0ulcbUT/640/480' ],
    voiceSample: '',
    video: '',
    latitude: 22.4215,
    longitude: 114.0302
  },
  {
    animalId: '06b01753-92d0-4214-a67c-c5b27b1f76f0',
    gender: 'male',
    age: 7,
    breed: 'Australian Stumpy Tail Cattle Dog',
    type: 'dog',
    color: 'blue',
    neuteredStatus: 'yes',
    healthStatus: 'sick',
    description: 'Curto admoneo universe aegre beneficium decipio delectus.',
    nickName: 'Lindsay',
    image: 'https://picsum.photos/seed/ICV6x/640/480',
    album: [ 'https://loremflickr.com/640/480?lock=1144266166370304' ],
    voiceSample: '',
    video: '',
    latitude: 22.3627,
    longitude: 114.1975
  },
  {
    animalId: '0e8f9f3b-8c97-4e7b-95d4-c62dbbd43310',
    gender: 'male',
    age: 15,
    breed: 'Miniature Fox Terrier',
    type: 'cat',
    color: 'salmon',
    neuteredStatus: 'no',
    healthStatus: 'sick',
    description: 'Atque corroboro alioqui decerno provident.',
    nickName: 'Tyree',
    image: 'https://loremflickr.com/640/480?lock=542276222713856',
    album: [
      'https://picsum.photos/seed/ccKwSoB2vR/640/480',
      'https://loremflickr.com/640/480?lock=5087873709637632',
      'https://loremflickr.com/640/480?lock=4087603267633152'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2308,
    longitude: 114.106
  },
  {
    animalId: '2409cc86-804d-44ec-bca5-ead8e37056e8',
    gender: 'female',
    age: 13,
    breed: 'Canadian Eskimo Dog',
    type: 'dog',
    color: 'magenta',
    neuteredStatus: 'no',
    healthStatus: 'injured',
    description: 'Triduana thesaurus numquam voluptatum amor tamisium sodalitas stips audeo.',
    nickName: 'Javonte',
    image: 'https://picsum.photos/seed/h99NvBS/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=233981394026496',
      'https://picsum.photos/seed/PENMzt/640/480'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2119,
    longitude: 114.2279
  },
  {
    animalId: 'cd7f8784-1ee1-49c4-b799-942c12fd5935',
    gender: 'female',
    age: 13,
    breed: 'Chien Français Tricolore',
    type: 'dog',
    color: 'plum',
    neuteredStatus: 'no',
    healthStatus: 'sick',
    description: 'Adopto clementia adflicto complectus ademptio temporibus alius.',
    nickName: 'Alanis',
    image: 'https://picsum.photos/seed/q8sgUy/640/480',
    album: [
      'https://loremflickr.com/640/480?lock=3133870480293888',
      'https://loremflickr.com/640/480?lock=1921779951992832'
    ],
    voiceSample: '',
    video: '',
    latitude: 22.2143,
    longitude: 113.8956
  },
  // {
  //   animalId: '49ad2a2f-34d6-484c-9cb9-e0e0f643ea74',
  //   gender: 'female',
  //   age: 5,
  //   breed: 'Affenpinscher',
  //   type: 'dog',
  //   color: 'lime',
  //   neuteredStatus: 'yes',
  //   healthStatus: 'sick',
  //   description: 'Suspendo harum sub cursus totidem solitudo.',
  //   nickName: 'Ramona',
  //   image: 'https://picsum.photos/seed/OdP8sadce/640/480',
  //   album: [
  //     'https://loremflickr.com/640/480?lock=7056886553640960',
  //     'https://picsum.photos/seed/N25UOAIuf/640/480',
  //     'https://loremflickr.com/640/480?lock=4651440486219776'
  //   ],
  //   voiceSample: '',
  //   video: '',
  //   latitude: 22.3485,
  //   longitude: 113.8222
  // },
  // {
  //   animalId: 'f92ae25a-5639-464b-bcc4-0d30fb92a846',
  //   gender: 'male',
  //   age: 7,
  //   breed: 'Drentse Patrijshond',
  //   type: 'cat',
  //   color: 'lavender',
  //   neuteredStatus: 'no',
  //   healthStatus: 'healthy',
  //   description: 'Curto termes alias tametsi.',
  //   nickName: 'Easter',
  //   image: 'https://picsum.photos/seed/TL5qa7/640/480',
  //   album: [
  //     'https://picsum.photos/seed/RTLgp/640/480',
  //     'https://picsum.photos/seed/jCBP33/640/480',
  //     'https://loremflickr.com/640/480?lock=7702065281236992',
  //     'https://loremflickr.com/640/480?lock=5704004954750976'
  //   ],
  //   voiceSample: '',
  //   video: '',
  //   latitude: 22.3137,
  //   longitude: 114.2102
  // },
  // {
  //   animalId: '7c30f939-88e4-40a1-862e-83d87118d41a',
  //   gender: 'male',
  //   age: 1,
  //   breed: 'East Siberian Laika',
  //   type: 'cat',
  //   color: 'plum',
  //   neuteredStatus: 'yes',
  //   healthStatus: 'healthy',
  //   description: 'Amaritudo uxor eos statim ara barba conscendo occaecati usus stabilis.',
  //   nickName: 'Zola',
  //   image: 'https://loremflickr.com/640/480?lock=7113032974991360',
  //   album: [
  //     'https://picsum.photos/seed/9rg9aeVr4c/640/480',
  //     'https://picsum.photos/seed/f81XRy5Y/640/480',
  //     'https://loremflickr.com/640/480?lock=7462521938116608',
  //     'https://loremflickr.com/640/480?lock=7761460522385408'
  //   ],
  //   voiceSample: '',
  //   video: '',
  //   latitude: 22.2801,
  //   longitude: 113.9665
  // },
  // {
  //   animalId: 'd8ce75c2-7cd1-4bac-bcc6-bc1cb2f8f1d5',
  //   gender: 'female',
  //   age: 8,
  //   breed: 'Peterbald',
  //   type: 'dog',
  //   color: 'ivory',
  //   neuteredStatus: 'yes',
  //   healthStatus: 'sick',
  //   description: 'Deporto accedo talus super cupiditate solutio utrimque clementia.',
  //   nickName: 'Philip',
  //   image: 'https://loremflickr.com/640/480?lock=7678773893791744',
  //   album: [
  //     'https://loremflickr.com/640/480?lock=5332348180627456',
  //     'https://picsum.photos/seed/zzqRI/640/480'
  //   ],
  //   voiceSample: '',
  //   video: '',
  //   latitude: 22.3901,
  //   longitude: 114.0801
  // },
  // {
  //   animalId: 'a00237e3-ad52-48d0-94a3-d64941d81b81',
  //   gender: 'male',
  //   age: 15,
  //   breed: 'Black Mouth Cur',
  //   type: 'dog',
  //   color: 'silver',
  //   neuteredStatus: 'no',
  //   healthStatus: 'injured',
  //   description: 'Sumo aliquid subseco circumvenio.',
  //   nickName: 'Josiah',
  //   image: 'https://picsum.photos/seed/IgRQNpJO/640/480',
  //   album: [
  //     'https://picsum.photos/seed/9dmOh/640/480',
  //     'https://loremflickr.com/640/480?lock=8036586084106240'
  //   ],
  //   voiceSample: '',
  //   video: '',
  //   latitude: 22.3298,
  //   longitude: 113.833
  // },
  // {
  //   animalId: '3f976296-1385-4646-afc4-7a7dc540a2c4',
  //   gender: 'male',
  //   age: 9,
  //   breed: 'Styrian Coarse-haired Hound',
  //   type: 'cat',
  //   color: 'plum',
  //   neuteredStatus: 'no',
  //   healthStatus: 'healthy',
  //   description: 'Ustilo quo aliquid casus deleo corpus utrimque.',
  //   nickName: 'Aurelio',
  //   image: 'https://picsum.photos/seed/tIcINJ/640/480',
  //   album: [
  //     'https://picsum.photos/seed/tjANSSFpxZ/640/480',
  //     'https://picsum.photos/seed/UFh4DAtp/640/480',
  //     'https://picsum.photos/seed/yBNuBX8/640/480'
  //   ],
  //   voiceSample: '',
  //   video: '',
  //   latitude: 22.2874,
  //   longitude: 113.8309
  // }
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
    latitude: 22.396873,
    longitude: 114.198035,
    url: 'https://cultivated-steam.name',
    startTime: 1714034633186
  },
  {
    cameraId: '08e9690b-e4f9-4c56-8b96-3b25272bf183',
    ip: 'b5e3:bfac:b0e3:32c1:537a:70ff:1ac5:effc',
    latitude: 22.392873,
    longitude: 114.195535,
    url: 'https://wavy-waiting.name',
    startTime: 1714074739781
  },
  {
    cameraId: 'c797487e-5d48-4450-a65d-48814a45f94b',
    ip: 'ffb0:0b1a:3fbf:e70b:ef46:31fc:feb3:3db7',
    latitude: 22.388873,
    longitude: 114.200035,
    url: 'https://cloudy-dirt.com',
    startTime: 1714052709178
  },
  {
    cameraId: '8ee1c280-4ccb-40a6-afb7-bdccf25b3184',
    ip: '138.197.4.221',
    latitude: 22.386473,
    longitude: 114.196035,
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
  const docRef = reportsCollection.doc(reportData.reportId);
  batch.set(docRef, reportData);
});



const animalHLSData = [
  {
    id: 'bc6d0c41-8ac0-4f93-acb8-071683288cac',
    url: 'https://dark-instrument.com',
    animalId: 'f762fc1e-1a33-4a1e-80f7-d468ee42ff39',
    appearDate: '2024-4-28',
    appearTime: 1714249099604,
    disappearDate: '2024-4-28',
    disappearTime: 1714294337061,
    captureImage: 'https://loremflickr.com/640/480'
  },
  {
    id: '92539f6c-2f78-4b6b-b3e0-1a6d11a7bd90',
    url: 'https://aromatic-subject.name',
    animalId: 'd5d38dd9-f45f-4869-807c-5a5728008de6',
    appearDate: '2024-4-28',
    appearTime: 1714265071734,
    disappearDate: '2024-4-29',
    disappearTime: 1714298839164,
    captureImage: 'https://loremflickr.com/640/480'
  },
  {
    id: '8b251bbf-eb69-48d7-afe3-69d89704ccbc',
    url: 'https://supportive-mileage.net',
    animalId: 'a62a3591-6301-45c3-816b-7e8619b1768a',
    appearDate: '2024-4-28',
    appearTime: 1714207437433,
    disappearDate: '2024-4-28',
    disappearTime: 1714265278721,
    captureImage: 'https://loremflickr.com/640/480'
  },
  {
    id: 'ef8b5b87-9f92-4f8a-b3fc-9bf20b80ee84',
    url: 'https://rash-hatred.org',
    animalId: 'fbd828fe-8aa6-4476-8d1a-171a35ed86f4',
    appearDate: '2024-4-28',
    appearTime: 1714203459718,
    disappearDate: '2024-4-28',
    disappearTime: 1714267410175,
    captureImage: 'https://loremflickr.com/640/480'
  },
  {
    id: 'a82ff650-afa3-473f-8e52-f2e0fc5bd3a0',
    url: 'https://appropriate-compassion.net',
    animalId: '583236f5-7135-4594-9a59-d3411c7e548e',
    appearDate: '2024-4-28',
    appearTime: 1714261303037,
    disappearDate: '2024-4-28',
    disappearTime: 1714281886092,
    captureImage: 'https://loremflickr.com/640/480'
  },
  {
    id: '860cd5d5-b3a5-4415-8d7f-e412b224dd8f',
    url: 'https://boring-conference.com/',
    animalId: '2ac8ec04-ad3f-430a-914f-8192718f6f09',
    appearDate: '2024-4-28',
    appearTime: 1714231603080,
    disappearDate: '2024-4-29',
    disappearTime: 1714274530899,
    captureImage: 'https://loremflickr.com/640/480'
  },
  {
    id: '215aa46a-02f4-4686-ba96-69ae2433655b',
    url: 'https://horrible-dynamo.name/',
    animalId: 'd9c8070f-0337-4890-932e-08ffe2db5cc7',
    appearDate: '2024-4-28',
    appearTime: 1714256874102,
    disappearDate: '2024-4-28',
    disappearTime: 1714306631256,
    captureImage: 'https://loremflickr.com/640/480'
  },
  {
    id: '0f12949c-affa-4e43-a1bf-7fdc4a72507d',
    url: 'https://concrete-person.info',
    animalId: 'ac7d60ba-be3b-4405-82fe-f14749a29734',
    appearDate: '2024-4-28',
    appearTime: 1714289428453,
    disappearDate: '2024-4-28',
    disappearTime: 1714310632689,
    captureImage: 'https://loremflickr.com/640/480'
  },
  {
    id: '7c0e0a96-1aa5-4a02-8b9e-62b9cbc5a0fc',
    url: 'https://uncommon-skywalk.biz/',
    animalId: '94169b28-a104-4db9-babe-7b4a546dfe01',
    appearDate: '2024-4-28',
    appearTime: 1714238191119,
    disappearDate: '2024-4-28',
    disappearTime: 1714293618742,
    captureImage: 'https://loremflickr.com/640/480'
  },
  {
    id: 'a4bc9638-1b07-4a94-a69b-101b25261d95',
    url: 'https://neighboring-movement.com/',
    animalId: 'ff9aa809-b9db-4d3d-984b-b6600e2ae1e2',
    appearDate: '2024-4-28',
    appearTime: 1714187559076,
    disappearDate: '2024-4-29',
    disappearTime: 1714246797188,
    captureImage: 'https://loremflickr.com/640/480'
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