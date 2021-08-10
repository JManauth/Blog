const seedUsers = require('./user-seed');
const seedArticles = require('./article-seed');
const seedComments = require('./comment-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n--- Database Synced ---\n');
    await seedUsers();
    console.log('\n--- Teachers seeded ---\n');
    await seedArticles();
    console.log('\n--- Students seeded ---\n');
    await seedComments();
    console.log('\n--- Grade seeded ---\n');

    process.exit(0);
};

seedAll();