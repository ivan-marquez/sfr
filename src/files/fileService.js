const _         = require("lodash");
const implement = require("implement-js").default;
const axios     = require("axios").default;
const FormData  = require("form-data");

const Service = require("./index");

const fileService = () => {
  /**
   * @memberof fileService
   * @desc file types supported
   */
  const fileTypes = {
    "application/pdf": "PDF",
    "image/gif"      : "GIF",
    "image/png"      : "PNG",
    "image/jpeg"     : "JPG",
    "image/tiff"     : "TIF",
    "image/bmp"      : "BMP",
  };

  const processFile = async files => {
    for (let file of files) {
      await getFileText(file);
    }
    return {
      uploaded: true,
    };
  };

  const getFileText = async file => {
    file.base64   = toBase64(file);
    file.fileType = fileTypes[file.mimetype];

    if (_.isEmpty(file.fileType)) {
      // TODO: throw error
    }

    const { data } = await ocrRequest(file);
    console.log(data);
  };

  const toBase64 = ({ buffer, mimetype }) => {
    const base64 = Buffer.from(buffer).toString("base64");
    return `data:${mimetype};base64,${base64}`;
  };

  const ocrRequest = ({ base64, fileType }) => {
    // TODO: env variable
    const url = "https://api.ocr.space/parse/image";
    const fd  = new FormData();

    // TODO: env variable
    fd.append("apikey", "key");
    fd.append("base64Image", base64);
    fd.append("filetype", fileType);
    fd.append("OCREngine", 2);

    return axios({
      method : "POST",
      url    : url,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: fd,
    });
  };

  return implement(Service)({
    processFile,
  });
};

module.exports = fileService;
