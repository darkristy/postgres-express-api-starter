const environment = process.env.NODE_ENV || 'development';
const Knex = require('knex')[environment];

const orderedTableNames = require('../../src/constants/orderedTableNames');

/**
 * @param {Knex} knex
 */

exports.seed = async knex => {
  // Deletes ALL existing entries
  await orderedTableNames.reduce(async (promise, tableName) => {
    await promise;
    return knex(tableName).del();
  }, Promise.resolve());
  // Inserts seed entries
};
