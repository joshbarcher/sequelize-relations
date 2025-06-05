import index from './model/index.js';

const { petSchema, recordSchema, speciesSchema, ownerSchema, ownerPetSchema, sequelize } = index;

//sync the models
await sequelize.sync({ force: true });

//records
const bird = await speciesSchema.create({ name: "Bird", description: "A flying creature" });

const polly = await petSchema.create({ name: "Polly", age: 5, availableForAdoption: true });
const furrball = await petSchema.create({ name: "Mr. Furrball", age: 1, availableForAdoption: false });

const record1 = await recordSchema.create({ description: "Routine checkup", date: new Date() });
const record2 = await recordSchema.create({ description: "Dental", date: new Date() });
const record3 = await recordSchema.create({ description: "Hurt wing", date: new Date() });
const records = [ record1, record2, record3 ];

const todd = await ownerSchema.create({ name: "Todd" });
const millie = await ownerSchema.create({ name: "millie" });

//one to one
polly.speciesId = bird.id; //attach manually
await polly.save();
//await polly.setSpecies(bird); //attach through built-in methods

//one to many
for (const record of records) { //attach manually
    record.petId = polly.id;
    await record.save();
}

// for (const record of records) { //attach through built-in methods
//     polly.addRecord(record);
// }

//many to many
await ownerPetSchema.create({ //attach manually
    petId: polly.id, 
    ownerId: millie.id}
)

// await polly.addOwner(todd); //attach through built-in methods
// await polly.addOwner(millie);
// await furrball.addOwner(millie);

console.log("All done!")