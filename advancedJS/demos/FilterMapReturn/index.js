const init = () => {
   const pets = {"name":"Doc", "type": "dog", "age": "8"},
                {"name":"Goose", "type": "cat", "age" : "3"},
                {"name":"Woody", "type": "bird","age" : "5"},
                {"name":"Doc", "type": "dog"},
                {"name":"Doc", "type": "cat"},
                {"name":"Doc", "type": "rabbit"},

   const birdPets3 = pets.filter(function(pet) {
       return pet.type == "bird" ? true : false;
   })

   console.table(birdPets3);

   const birdPets4 = petrs.filter(pet => pet.type == "bird");

   console.table(birdPets4);
}

window.addEventListener("load", init);

