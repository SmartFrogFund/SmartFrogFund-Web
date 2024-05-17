export const PhonePattern = /^[1]([3-9])[0-9]{9}$/;

export const EmailPattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;

export const AccountPattern = /(^[1]([3-9])[0-9]{9}$)|(^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$)/;

// export const PwdPattern = /^(?![a-zA-Z]+$)(?![0-9]+$)(?![.,?!':~@;"/\-_)(+=`^\\&%*#\[\]<>{}|·¡¿$¥£€–´＂＇¢฿]+$)[a-zA-Z0-9.,?!':~@;"/\-_)(+=`^\\&%*#\[\]<>{}|·¡¿$¥£€–´＂＇¢฿]{8,16}$/;
// export const PwdPattern = /^[a-zA-Z0-9]{8,16}$/;
export const PwdPattern = /^[a-zA-Z0-9@#$_.-]{8,}$/;

export const RequiredPattern = /^[\s\S]*.*[^\s][\s\S]*$/;

export const NoSpecialCharPattern = /^[0-9a-zA-Z\u4e00-\u9fa5\-_]+$/;

export const urlPattern = /http(s)?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&\+\%]*/is;
export const CodePattern = /^\d{6}$/;
