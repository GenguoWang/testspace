function testThis()
{
    this.second = function()
    {
        console.log(this);//testThis
    }
    this.second();
}
function global()
{
    console.log(this);//window
}
console.log("new");
new testThis();
