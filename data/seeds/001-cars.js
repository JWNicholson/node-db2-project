
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, Make: 'Chevy', Model: 'Blazer', Miles: 158000, VIN: 712345678, Transmision: 'Manual', Title: 'salvage', year: 1998},
        {id: 2, Make: 'Ford', Model: 'Fusion', Miles: 109000, VIN: 659874122, Transmision: 'Automatic', Title: 'clear', year: 2011},
        {id: 3, Make: 'KIA', Model: 'REO', Miles: 112000, VIN: 9998854402, Transmision: 'Automatic', Title: 'clear', year: 2013}
      ]);
    });
};
