function testThis()
{
    this.second = function()
    {
        console.log(this);//testThis
        this.a=function(){return this;}
        console.log(this.a());
        console.log((function aabb(){return this;})());
    }
    this.second();
}
function global()
{
    console.log(this);//window
}
console.log("new");
new testThis();
function logthis()
{
    console.log(this);
    console.log((function(){return this;})());
}
