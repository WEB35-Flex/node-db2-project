exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "1GNDT13W5R2133070",
          make: "Toyota",
          model: "Corrola",
          mileage: 65000,
          transmission: "automatic",
          title: "clean",
        },
        {
          VIN: "JH4DA3363HS017471",
          make: "Ford",
          model: "Mustang",
          mileage: 45000,
          transmission: "manual",
          title: "clean",
        },
      ]);
    });
};
