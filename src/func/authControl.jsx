// function authCheck(token, expireDate, setter, redirection) {
//     if (token && expireDate) {
//         const now = new Date();
//         if (Date.parse(expireDate) > now.getTime()) {
//             localStorage.setItem("AuthStatus", true);
//             setter(true);
//             redirection("/");
//         }
//     } else {
//         resetAuth();
//         redirection("/error");
//     }
// }

// function authControl(token, expireDate, setter) {
//     if (token && expireDate) {
//         const now = new Date();
//         if (Date.parse(expireDate) > now.getTime()) {
//             localStorage.setItem("AuthStatus", true);
//             setter(true);
//         } else {
//             resetAuth();
//         }
//     } else {
//         resetAuth();
//     }
// }

// function resetAuth() {
//     localStorage.setItem("AuthStatus", false);
//     localStorage.setItem("TOKEN", "");
//     localStorage.setItem("EXPIRE", "");
//     localStorage.setItem("CompaniesUsed", "");
//     localStorage.setItem("CompaniesLimit", "");
// }

// export { authControl, authCheck }; 

function authSet(data){
    localStorage.setItem("isAuth", true);
    localStorage.setItem("expire", data.expire);
    localStorage.setItem("accessToken", data.expire);
}

function isAuth(){
    console.log(localStorage.getItem('isAuth'));
    if(localStorage.getItem('isAuth')){
        return true;
    }else{
        return false;
    }
}

export { authSet, isAuth }