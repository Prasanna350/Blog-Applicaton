import mongoose from 'mongoose';
//const URL = `mongodb://${username}:${password}@blogweb-shard-00-00.ch1hk.mongodb.net:27017,blogweb-shard-00-01.ch1hk.mongodb.net:27017,blogweb-shard-00-02.ch1hk.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-lhtsci-shard-0&authSource=admin&retryWrites=true&w=majority`;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ojhv2gi-shard-00-00.vwhjhrl.mongodb.net:27017,ac-ojhv2gi-shard-00-01.vwhjhrl.mongodb.net:27017,ac-ojhv2gi-shard-00-02.vwhjhrl.mongodb.net:27017/?ssl=true&replicaSet=atlas-cwbq1b-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;