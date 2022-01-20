const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors())

var dir = './public';

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public')
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname)
	},
})

const upload = multer({storage}).single('file')

app.post('/upload', (req, res) => {
	upload(req, res, (err) => {
		if (err) {
			return res.status(500).json(err)
		}

		return res.status(200).send(req.file)
	})
})

app.listen(8000, () => {
	console.log('App is running on post 8000')
})