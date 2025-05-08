import sequelize from './../db/db.js';
import { DataTypes } from 'sequelize';

const schema = sequelize.define('record', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: DataTypes.TEXT,
    date: DataTypes.DATE
}, { timestamps: false });

export default schema;