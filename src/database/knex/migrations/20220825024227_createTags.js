exports.up = knex => knex.schema.createTable("movie_tags", table => {
  //auto increment field
  table.increments("id")
  //verifying blank name 
  table.text("name").notNullable()
  //Delete tag with her note
  table.integer("note_id").references("id").inTable("movie_notes").onDelete("CASCADE")
  table.integer("user_id").references("id").inTable("users")
  
});

exports.down = knex => knex.schema.dropTable("movie_tags");
