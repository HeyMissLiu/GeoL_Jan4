//定义cookie
const setCookie = (cname, value, { domain, path, maxAge, secure } = { }) => {
    //使用encodeURIComponent(),对cookie的名字和值进行转码
    let cookieString = `${encodeURIComponent(cname)} = ${encodeURIComponent(value)}`;
    //如果传入了domain的值，添加domain
    if (domain) {
        cookieString += `; domain = ${domain}`;
    }
    //如果传入了path，添加path
    if(path){
        cookieString += `; path = ${path}`;
    }
    //如果传入了maxAge，添加maxAge
    if(typeof maxAge === "number"){
        cookieString += `; max-age = ${maxAge}`;
    }
    //如果有secure的值，传入
    if(secure){
        cookieString += `; secure`;
    }
    //设置cookie
    document.cookie = cookieString;
}

//定义获取cookie的值
const getCookie = (cname) => {
    //将cname进行转码
    let name = encodeURIComponent(cname);
    //获取所有cookie
    let cookie = document.cookie
    //将所有cookie转换成数组
    let cookieArr= cookie.split("; ");
    //遍历数组
    for (let i = 0; i < cookieArr.length; i++){
        // 遍历cookieArr数组，将每一项按照"="进行分割，将分割后的第一项赋值给cookieName，将分割后的第二项赋值给cookieValue
        const [cookieName, cookieValue] = cookieArr[i].split("=");
        if(cookieName === name){
            //将cookie的值转码后返回
            return decodeURIComponent(cookieValue);
        }
    }
}

//定义删除cookie
const deleteCookie = (cname, domain, path) => {
    //设置cookie的值为空，并传入参数
    setCookie(cname, "", domain, path, -1);
}