const express = require("express");
const app = express();

const {open} = require("sqlite");
const path = require("path");
const sqlite3 = require("sqlite3");

const dbPath = path.join(__dirname,"./data.db");

let db = null;

const intializeDBserver = async() => {
    try{
        db = await open({
            filename : dbPath,
            drivers : sqlite3.Database
        });
        app.listen(3000,()=>{
            console.log("server is running https://localhost:3000")
        });
    }
    catch(e){
        console.log("error");
        process.exit(1);
    }
};

intializeDBserver();