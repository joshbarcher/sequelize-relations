import sequelize from './../db/db.js';
import { DataTypes } from 'sequelize';

const schema = sequelize.define('species', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT
}, { timestamps: false });

export default schema;