/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    { id: 1, title: 'Interstellar', release_date: '2014' },
    { id: 2, title: 'Shutter Island', release_date: '2010' },
    { id: 3, title: 'Inception', release_date: '2010' },
    { id: 4, title: 'Grand Budapest Hotel', release_date: '2014' },
    { id: 5, title: 'Mad Max:Fury Road', release_date: '2015' },
  ])
}
