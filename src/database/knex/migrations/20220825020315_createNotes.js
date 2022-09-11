exports.up = knex => knex.schema.createTable("movie_notes", table => {
  //auto increment field
  table.increments("id")
  //text fields
  table.text("title")
  table.text("description")
  //reference field
  table.integer("user_id").references("id").inTable("users")
  //int field
  table.integer("rating")


  //time stamp field
  table.timestamp("created_at").default(knex.fn.now())
  table.timestamp("updated_at").default(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable("movie_notes");
