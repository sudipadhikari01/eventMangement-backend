const multer = require("multer");
const uuidv4 = require("uuid/v4");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, newFilename);
  }
});

var upload = multer({ storage: storage }).single("eventImage");

// const upload = multer({ storage });

module.exports = upload;
