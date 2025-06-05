import sequelize from './../db/db.js';
import petSchema from './pet.model.js';
import recordSchema from './record.model.js';
import speciesSchema from './species.model.js';
import ownerSchema from './owner.model.js';

//define one-to-one relationship
petSchema.belongsTo(speciesSchema, { foreignKey: 'speciesId' });
speciesSchema.hasOne(petSchema, { foreignKey: 'speciesId' });

//define many-to-many relationship
petSchema.hasMany(recordSchema, { foreignKey: 'petId' });
recordSchema.belongsTo(petSchema, { foreignKey: 'petId' });

//many-to-many
const joinTable = await sequelize.define("ownerPet", {}, { timestamps: false })
ownerSchema.belongsToMany(petSchema, {
    through: joinTable,
    foreignKey: "ownerId"
})
petSchema.belongsToMany(ownerSchema, {
    through: joinTable,
    foreignKey: "petId"
})

export default { 
    petSchema, 
    recordSchema, 
    speciesSchema, 
    ownerSchema, 
    ownerPetSchema: joinTable, 
    sequelize 
};