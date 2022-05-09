// import db from "../config/db.js";
// import { Sequelize } from "sequelize";

const db = require("../config/db.js")
const Sequelize = require('sequelize');

const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
    host: db.HOST,
    dialect: db.dialect,
    operatorsAliases: false,
    pool: {
        max: db.pool.max,
        min: db.pool.min,
        acquire: db.pool.acquire,
        idle: db.pool.idle
    }
});

const dbb = {}
dbb.Sequelize = Sequelize;
dbb.sequelize = sequelize;
dbb.tutorials = require('./tutorialModels.js')(sequelize, Sequelize)
module.exports = dbb