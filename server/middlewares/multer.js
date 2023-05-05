import multer from "multer";
import fs from "fs";
import util from "util";


const uf = util.promisify(fs.unlink);

const storage = multer.memoryStorage();

const singleUpload = multer({ storage }).single("file");

export const unLinkFile = async (path) => {

    await uf(path);
}

export default singleUpload;