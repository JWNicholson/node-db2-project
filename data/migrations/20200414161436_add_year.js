
exports.up = function(knex) {
  return knex.schema.table('cars', table => {
    table.decimal('year')
  })
};

exports.down = function(knex) {
  return knex.schema.table('carsa', table => {
      table.dropColumn('year')
  })
};
