export function validateEmail(email) {
  var reg = /^([\w\d\.\-_]+)@([\w\d\.\-]+)\.([\w\d]{2,3})$/;
  return reg.test(String(email));
}
