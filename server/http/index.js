const express = require("express");
const router  = express.Router();
const multer  = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

const fileHandler = require("./fileHandler");
// const store = require("../storage/ldb");
const fileService = require("../../src/files/fileService");

const service = fileService();
const handler = fileHandler(service);

router.post("/files", upload.array("images", 5), handler.fileHandler);

module.exports = router;
