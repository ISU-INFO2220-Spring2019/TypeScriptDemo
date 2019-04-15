var a = 3;
//alert(a);
let bad: number = 5;
bad = 12345;

var cat: boolean;
var dab: string;
var echo: number[] = new Array();
var foxtrot: string[] = new Array();
var george: object;

//dab = null;
echo.push(1);
foxtrot[0] = "two";
george = { "hello": "THING" };

var hats: string = "23";

bad = <number>(<any>(hats + "4")) * 3;
//alert(bad);
bad = <number><any>hats + 3;
//alert(bad);

var iphone: unknown;

var jStr:string = "";
var jelly: number[] = [45, 64, 32, 85, 324, 9];
for (let a in jelly) {
    jStr += a + " ";
}
alert(jStr);

for (let a of jelly) {
    jStr += a + " ";
}
alert(jStr);

alert("Hello");