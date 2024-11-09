const accountID = 144553;
let accountEmail = "vinayakworlikersai@gmail.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;

// accountID = 2; not allowed
{
}

accountEmail = "hc@hc.com";
accountPassword = "2121212";
accountCity = "Delhi";
/*
Prefer not to use var
because of issue in block scope and functional scope
 */
console.table([
  accountID,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
