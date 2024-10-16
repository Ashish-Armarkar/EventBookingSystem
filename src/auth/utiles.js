export const userAuth = (email, password, userData) => {
    const user = userData.find(ele => {
        return ele.email == email && ele.password == password
    })

    if (user) {
        let userString = JSON.stringify(user);
        localStorage.setItem("userToken", window.btoa(userString));
        return user;
    } else {
        return "userNotFound"
    }
}

export const getUserFromStorage = () => {
    try{
        const encryptedString = localStorage.getItem( "userToken" );
        const userData = JSON.parse( window.atob(encryptedString) );
        return userData;
    }
    catch{
        return null;
    }
}