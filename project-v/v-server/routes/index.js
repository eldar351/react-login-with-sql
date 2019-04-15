var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql');

pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  connectionLimit: 10
});





// check if user exsit
router.post('/register', async function (req, res, next) {  

  let registerQuery=`
  SELECT * FROM vacation.allusers 
  WHERE username='${req.body.username}'
  `;
  var result = await pool.query(registerQuery); 
  if(result.length==0)
  {
  

      // if no user found create one 
      let userQuery=
     ` INSERT INTO vacation.allusers ( username , password ,name,lastname)
      VALUES ( '${req.body.username}', '${req.body.password}','${req.body.name}','${req.body.lastname}'); 
      `;
      let data= await pool.query(userQuery) ;
      res.json(`welcome to are web ${req.body.username}`);

     
 

  }
  // user exsit
  else{
   
res.json(`username alredy exsit `); 

} 
});


// let user login
router.post('/login', async function (req, res, next) {  

 
  let loginQuery=`
  SELECT * FROM vacation.allusers 
  WHERE username='${req.body.username}' AND password='${req.body.password}' 
  `;
  var result1 = await pool.query(loginQuery); 
// chek at data base if we this username and password
  if(result1.length==1)

 {
  let flightsQuery=`
  SELECT * FROM vacation.flights
  `;
  var result3 = await pool.query(flightsQuery);
 
  
  
  //  session...
req.session.user={
  username: req.body.username,
  pass:req.body.password
}

var users=req.session.user.username
let data={
  user:req.session.user.username,
  result:result3
}
  res.json( data)
   
  }
else{
  res.json(`worng username or password `); 
}

});





module.exports = router;
