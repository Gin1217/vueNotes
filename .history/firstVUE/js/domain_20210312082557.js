// JS的作用域

// 外部变量，全局变量。if语句不是块级语句
if(true){
    var externalVal = 'externalVal'
}

// 内部变量，块级作用。funVal只在这一块
function domainTest(){
    var funVal = 'funVal'
    console.log(externalVal +'------------'+funVal)
}

domainTest()

if(true){
    console.log(externalVal);
    console.log(funVal);
}
// 到了这里就只能显示externalVal，但不能显示Val了