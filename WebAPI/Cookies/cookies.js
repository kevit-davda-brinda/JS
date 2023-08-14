// console.log("hi");
console.log(navigator.cookieEnabled)



// document.cookie = "lastname=deep;expires=Sun , 1 January 2024 12:00:00 UTC";
// document.cookie = "firstName=adam;expires=Sun , 10 Augest 2053 12:00:00 UTC";


function setCookie(name,value,daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
    const expires = "expires="+date.toUTCString();
    document.cookie = `${name}=${value};${expires};path="/"`
}

function deleteCookie(name){
    setCookie(name,null,null);
}

function get_cookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split(";")
    let results = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) === 0){
            results = element.substring(name.length+1)
        }
    })

    return results;
}

// setCookie("email","example@gmail.com",365);
console.log(get_cookie("firstName"))


deleteCookie("email");
deleteCookie("lastname");
deleteCookie("username");
deleteCookie("firstname");
// console.log(document.cookie)