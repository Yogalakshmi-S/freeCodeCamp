function palindrome(str){
  str = str.split(" ").join("");
  str = str.trim()
  str= str.toLowerCase().replace(/[\W_]/g, '');
  for(var i=0;i<str.length;i++){
if((str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z') || (str[i]>=0 && str[i]<=9)) {
}
else{
  str[i]=str[i+1];
  i++;
}}
var str1=str.split("");
var final=str1.reverse();
var revstr=final.join("");

if(str === revstr){
  return true;
}
else{
  return false;
}
}
palindrome("My age is 0, 0 si ega ym.");
