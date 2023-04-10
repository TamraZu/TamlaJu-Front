export function setCookie(cookie_name: string, value: string, days: number) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정
    const cookie_value = value + ((days == null) ? '' : '; expires=' + exdate.toUTCString());
    document.cookie = cookie_name + '=' + cookie_value;
}

export function getCookie(cookie_name: string) {
    const val = document.cookie.split('=');

    for (let i = 0; i < val.length; i++) {
        if (val[0] === cookie_name) {
            return val[1];
        }
    }
} 