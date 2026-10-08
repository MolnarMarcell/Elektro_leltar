import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import 'dotenv/config';

const app = express();
app.use(express.json());

app.use(cors());

const poolConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const pool = mysql.createPool(poolConfig);

const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Kezdőlap");
});

app.listen(PORT, () => {
    console.log('A szerver a', PORT + "-on Fut");
});

app.get("/komponensek", async (req,res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM komponensek");
        return res.status(200).json(rows);
    }
    catch (error) {
        console.error("Hiba történt a lekérdezés közben", error);
        return res.status(500).json({error : "Internal Server Error!"});
    }
});