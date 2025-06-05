import sequelize from './../db/db.js';
import { DataTypes } from 'sequelize';

const schema = sequelize.define('pet', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    availableForAdoption: DataTypes.BOOLEAN
}, { timestamps: false });

export default schema;