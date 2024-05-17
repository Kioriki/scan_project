


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
function authClear(){
    localStorage.clear()

}

export { authSet, isAuth, authClear }

