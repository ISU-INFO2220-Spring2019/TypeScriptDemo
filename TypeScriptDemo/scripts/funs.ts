class Thing{
    fun(x:number,y:number | string,z?:number): boolean {
        return x === y;
    }
}
var t: Thing;
t = new Thing();
t.fun(1, "2");
t.fun(1, 2, 3);

class Person{
    private _FirstName: string;
    private _LastName: string;

    constructor(fName: string, lName: string) {
        this._FirstName = fName;
        this._LastName = lName;
    }

    get firstName() {
        return this._FirstName;
    }
    set firstName(a:string) {
        this._FirstName = a;
    }
    get happy() {
        return "happiness";
    }
}

var p = new Person("Bob","Wooley");
var f = p.firstName;
p.firstName = "Bully";

class Employee extends Person {
    private _Wage: number;

    constructor(wge: number) {
        super("Jane", "Doe");
        this.wage = wge;
    }

    get wage() {
        return this._Wage;
    }
    set wage(val: number) {
        this._Wage = val;
    }

}

var e: Employee = new Employee(30);
e.firstName = "Sally";
//e.newMagicThing = "asdfasdf";

this.call("HelloWorld","bob")

