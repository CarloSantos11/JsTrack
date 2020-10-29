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
let developer = {
  name: "Jose Rizal",
  dob: "6/19/1961",
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

developer.work("Java");
developer.work("C#");
// ---- Creating Objects With Constructors ----
function developerConstructor() {

}
// ---------------- Prototypes ----------------
// Extending objects
// -------------------
// typeof vs. instanceof