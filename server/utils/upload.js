import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb://${username}:${password}@ac-ojhv2gi-shard-00-00.vwhjhrl.mongodb.net:27017,ac-ojhv2gi-shard-00-01.vwhjhrl.mongodb.net:27017,ac-ojhv2gi-shard-00-02.vwhjhrl.mongodb.net:27017/?ssl=true&replicaSet=atlas-cwbq1b-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 