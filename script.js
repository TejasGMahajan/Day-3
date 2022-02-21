//Q.1 For the given JSON iterate over all for loops (for, for in, for of, forEach)


var users = {
	name : ["Tony" , "steve" , "peter", "Loki", "Thor" , "strange"]
  };
  
  //json example through for loop 
   for(var i = 0; i<users.name.length; i++){
	 console.log(users.name[i]);
   }
  
  //json example through for in loop 
  for (const marvel in users) {
	for (const Heros in users[marvel]) {
	  console.log(users[marvel][Heros]);
	}
  }
  
  //json example through for of loop 
  
   for (const marvel of users.name) {
	 console.log(marvel);
   }
  
  
  //json example through forEach loop 
	users.name.forEach( u => {
	  console.log(u)
	});
	
	//Q.2 Create your own resume data in JSON format

	var resume=[{"Name":"Tejas Mahajan",
             "qualification":"Diploma Mechanical",
             "email":"mahajantejas96@gmail.com",
            "Experience":"fresher",
        "Address":"abc",
    "Domain":"Full stack development",}];

resume.forEach(function() {
    console.log(resume);
});