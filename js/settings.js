/*function setCookie() {
    //var date = new Date("Februari 10, 2013");
    //var dateString = date.toGMTString();
    var cookieString = "mycookie";//"Css=document.getElementById("css").href" + dateString;
    document.cookie = cookieString;
}

function getCookie() {
    alert(document.cookie);
}*/

//Try this one to write:
function bake_cookie(name, value) {
    var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
    document.cookie = cookie;
}

//To read it take:
function read_cookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}

// To delete it take:
function delete_cookie(name) {
    document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('');
}

//To serialize complex objects / instances, why not write a data dump function in your instance:
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

// Then you dump the data, stringify it, write it to the cookie, and next time you want to use it just go:
//var mydata = JSON.parse(read_cookie('myinstances'));
//new userConstructor(mydata.name, mydata.street, mydata.city);