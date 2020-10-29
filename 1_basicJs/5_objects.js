//                 OBJECTS
// -------------------------------------------
// DEFINITION:
//    OBJECTS HAVE A COLLECTION OF PROPERTIES AND METHODS
// PROPERTIES: ARE SIMPLY THINGS AN OBJECT KNOWS ABOUT ITSELF
// METHODS: ARE THINGS OUR OBJECT KNOWS HOW TO DO


// Almost everything is an object in JavaScript

// We do have primitives in JavaScript which are:
//    - numbers
//    - strings
//    - booleans
// These are simple data types NOT OBJECTS

// We also have more complex data types.
//    - arrays
//    - objects
//    - hashes/maps/key valu pairs
//    - JSON
// We can refer to these more complex data types as DATA STRUCTURES
// THESE ARE OBJECTS

// We structure our data to be packaged with not just one peice of data
//    but a collection of data. All of these complex data types/data structures 
//    actually objects themselves.


// ------- Creating Objects With Literals -----

// This object only has properties
let developer_1 = {
  name: "Jose Rizal",
  dob: "6/19/1961",
  languages: ["Java", "Javascript", "Ruby"],
  level: "Senior Dev",
};

// Objects can have both properties and methods
let developer_2 = {
  name: "Ada Lovelace",
  dob: "12/10/1815",
  languages: ["Java", "Javascript", "Ruby"],
  level: "Senior Dev",
  work: function(language) {                                    // This is a method called work
    if (this.languages.find(lang => lang == language)){         // This looks to see if the argument
      console.log(`Writing code in ${language}`);               //    passed in matches a language within 
    }else {                                                     //    our developers languages property, which is an array
      console.log(`... I'll need some time to brush up on ${language}`);
    }
  }
};
console.log(developer_1);
console.log(developer_2);

developer_2.work("Java");   // The console.log takes place in the function
developer_2.work("C#");
// ---- Creating Objects With Constructors ----
function Dev(name, dob, languages, level) {
  this.name = name;
  this.dob = dob;
  this.languages = languages;
}

let me = new Dev("Carlo", "12/10/1989", ["Java", "Javascript", "Ruby"]);

console.log(me);
// ---------------- Prototypes ----------------
// Extending objects
// -------------------
// typeof vs. instanceof