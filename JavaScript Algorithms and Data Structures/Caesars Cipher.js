function rot13(str) {
str=str.trim()
var res=[];
var a=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
for(var i=0;i<str.length;i++){
  if(str[i]>='A' && str[i]<='Z'){
  for(var j=0;j<a.length;j++){
     if(str[i]==a[j]){
       if((j+13)>=26){
         res.push(a[(j+13)-26])
       }
       else{
         res.push(a[j+13])
       }
     }
  }
  }
  else{
    res.push(str[i])
  }
}
res=res.join("")
return res
}

rot13("SERR PBQR PNZC");
