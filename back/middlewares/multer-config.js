const multer = require("multer");

const MIME_TYPES = {
    "image/jpep": "jpg",
    "image/jpg": "jpg",
    "image/png": "png",
    "image/web": "webp"
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "assets/images");
    },
    finename: (req, file, callback) => {
        const fileInfo = path.parse(file.originalname);
        const name = fileInfo.name;
        const extension = MIME_TYPES[file.mimetype];


        if (!MIME_TYPES.hasOwnProperty(file.mimetype)) {
            return callback(new Error('Invalid file type'));
        }
        callback(null, `${name}_${new Date.getTime()}.${extension}`);

    },

});

module.exports = multer({storage:storage}).single('image');