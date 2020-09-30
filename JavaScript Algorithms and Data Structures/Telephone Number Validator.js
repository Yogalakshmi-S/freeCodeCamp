function telephoneCheck(str) {
  var phone=/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/gm;
  var res=str.match(phone)
  if(res==str){
    return true
  }
  else{
    return false
  }
}
telephoneCheck("555-555-5555");
