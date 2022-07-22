//program to find given number amstrong or not
var s=0;
var n=prompt("Enter number");
l=n.length;
for(i=0;i<l;i++){
    s+=n[i]**l;
}
if(n==s)
{
    alert(n+"is an amstrong number");

}
else{
    alert(n+"is not amstrong")
}