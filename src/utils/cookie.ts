const getsec = (str: string): number => {
    let str1: number = Number(str.substring(1, str.length))
    let str2: string = str.substring(0, 1)
    if(str2 == "s") {
        return str1*1000
    }
    if(str2 == "h") {
        return str1*60*60*1000
    }
    if(str2 == "d") {
        return str1*24*60*60*1000
    }
    throw console.error('时间格式错误---> s + time | h + time | d + time ==>> s1| h1 | d1');    
}

const getCookie = (name: string): string | null => {
    let reg: any = new RegExp("(^| )"+ name + "=([^;]*(;|$))");
    let arr: any = document.cookie ? document.cookie.match(reg) : []; 
    if(arr.length > 0 ) {
        return unescape(arr[2])
    }
    return null
}

const setCookie = (name: string, value: string, time: string = "d1"): void => {
    let strsec: number = getsec(time)
    let exp: any = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()};`
}
const delCookie = (name: string): void => {
    let exp: any = new Date();
    let cval: string | null = getCookie(name)
    exp.setTime(exp.getTime() - 1000);
    if(cval != null) {
        document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`
    }
}

const clearCookie = (): void => {
    let keys: any = document.cookie ? document.cookie.split(';') : [] 
    if(keys.length > 0) {
        for(let i= 0; i < keys.length; i++) {
            console.log(keys[i])
            let exp:any = new Date();
            exp.setTime(exp.getTime() - 1000);
            document.cookie = `${keys[i]};expires=${exp.toGMTString()}`
        }
    }
}

export {
    getCookie,
    setCookie,
    delCookie,
    clearCookie
}
