//Try this one to write:
function bake_cookie(name, value) {
  var cookie = [name, '=', value, ';expires=Thu, 18 Dec 2028 12:00:00 UTC; path=/'].join("");//, '; domain=.', window.location.host.toString(), '; path=/;'].join('');
  document.cookie = cookie;
  console.log("Setting cookie...\n"+cookie);
}

//To read it take:
function read_cookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match){
        console.log("Cookie loaded...\n"+match[2]);
        return match[2]; 
    } 
}

function cookieExists(name){
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if(match) {  return true;  } 
    else { return false;  }
}

// To delete it take:
function delete_cookie(name) {
    document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('');
}

//var mydata = JSON.parse(read_cookie('myinstances'));

/* To serialize complex objects / instances, why not write a data dump function in your instance:
function userConstructor(name, street, city) {
    // ... your code
    this.dumpData = function() {
        return {
            'userConstructorUser': {
            name: this.name,
            street: this.street,
            city: this.city
            }
        }
    }
}
*/
// Then you dump the data, stringify it, write it to the cookie, and next time you want to use it just go:
//new userConstructor(mydata.name, mydata.street, mydata.city);