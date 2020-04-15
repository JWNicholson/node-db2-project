
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments();

      table.string('Make', 128)
        .notNullable()
        .index();

        table.string('Model', 128)
            .notNullable();

        table.decimal('Miles', )
            .notNullable();

        //VIN could be indexed for faster search
        table.decimal('VIN')
            .notNullable();

        table.string('Transmision', 255);

        table.string('Title', 128);

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
