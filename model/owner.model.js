import sequelize from './../db/db.js';
import { DataTypes } from 'sequelize';

const schema = sequelize.define('owner', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
}, { timestamps: false });

export default schema;