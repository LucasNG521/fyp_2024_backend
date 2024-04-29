// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const { admin, db, storage } = require('./firebase');


const userRoutes = require('./routes/userRoutes');
const animalRoutes = require('./routes/animalRoutes');
const animalHLSRoutes = require('./routes/animalHLSRoutes');
const cameraRoutes = require('./routes/cameraRoutes');
const reportRoutes = require('./routes/reportRoutes');


const app = express();
const port = process.env.PORT || 8080;

const upload = multer({
  storage: multer.memoryStorage()
});

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/users', userRoutes);
app.use('/animals', animalRoutes);
app.use('/animalHLS', animalHLSRoutes);
app.use('/cameras', cameraRoutes);
app.use('/reports', reportRoutes);

// Image upload route
// app.post('/upload', upload.single('file'), async (req, res) => {
//   if (!req.file) {
//       return res.status(400).send('No file uploaded.');
//   }

//   try {
//       const file = req.file;
//       const bucket = admin.storage().bucket(); // Assuming default bucket
//       const fileUpload = bucket.file(file.originalname);

//       const blobStream = fileUpload.createWriteStream({
//           metadata: {
//               contentType: file.mimetype,
//           },
//       });

//       blobStream.on('error', (error) => res.status(500).send(error));

//       blobStream.on('finish', async () => {
//           const url = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
//           await db.collection('images').add({
//               url,
//               createdAt: admin.firestore.FieldValue.serverTimestamp(),
//           });
//           res.status(200).send({ url });
//       });

//       blobStream.end(req.file.buffer);
//   } catch (error) {
//       res.status(500).send(error.message);
//   }
// });

// Modify the multer setup to handle multiple files up to 10
app.post('/upload', upload.array('files', 10), async (req, res) => {
  if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded.');
  }

  const urls = [];
  try {
    await Promise.all(req.files.map(file => {
        return new Promise((resolve, reject) => {
            const bucket = storage.bucket('gs://fyp-3-53b05.appspot.com');
            const fileUpload = bucket.file(file.originalname);

            const blobStream = fileUpload.createWriteStream({
                metadata: {
                    contentType: file.mimetype
                }
            });

            blobStream.on('error', reject);

            blobStream.on('finish', async () => {
              await fileUpload.makePublic();

                const url = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
                await db.collection('images').add({
                    url,
                    createdAt: admin.firestore.FieldValue.serverTimestamp(),
                });
                urls.push(url);
                resolve();
            });

            blobStream.end(file.buffer);
        });
    }));

    res.status(200).send({ urls });
} catch (error) {
    res.status(500).send(error.message);
}
});

app.get('/activityLogs', async (req, res) => {
  try {
      const activityLogsCollection = db.collection('activityLogs');
      const activityLogs = await activityLogsCollection.get();
      const logs = [];
      activityLogs.forEach(doc => {
          logs.push(doc.data());
      });
      res.status(200).json(logs);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
})


app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;