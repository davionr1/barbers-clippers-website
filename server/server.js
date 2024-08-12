require('dotenv').config()
const PG_USER = process.env.pg_user
const PG_PORT = process.env.pg_port
const PG_PASSWORD = process.env.pg_password
const PG_DB = process.env.pg_db
const PG_HOST = process.env.pg_host
const PG_URI = `postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DB}`
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize(PG_URI)
const express = require("express")
const app = express()


app.listen(3000,()=>{
    console.log("port listening on port 3000");
})
sequelize.sync().then(()=>{
    console.log("db is synced");
})
console.log("test");
