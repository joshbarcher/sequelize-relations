import sequelize from './../db/db.js';
import petSchema from './pet.model.js';
import recordSchema from './record.model.js';
import speciesSchema from './species.model.js';
import ownerSchema from './owner.model.js';

export default { petSchema, recordSchema, speciesSchema, ownerSchema, sequelize };