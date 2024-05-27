export { }
// --------------- functio that return a function--------------
function myLogFunction() {
    return (str: string) => {
        console.log(str);
    };
}
const myLogFunc = myLogFunction();
myLogFunc("Hello from function");
// output: Hello

// -------------------------- function that returns object (or class) -----------------------

function myLoggerClass() {
    return new (class Logger {
        private completeLog: string = "";
        log(str: string) {
            console.log(str);
            this.completeLog += `${str}\n`;
        }
        dumpLog() {
            return this.completeLog;
        }
    })();
}

const myLoggerOClassObject = myLoggerClass();
myLoggerOClassObject.log("Hello From Class");

// -------------------------- Mixins example -----------------------
// popular way of building up classes from reusable components is to build them
// by combining simpler partial classes.
// The pattern relies on using generics with class inheritance to extend a base class.

function memoryData<T>() {
    return class MemoryData {
        private record: Record<string, T> = {};

        set(id: string, value: T): void {
            this.record[id] = value;
        }

        get(id: string): T {
            return this.record[id];
        }

        getObject(): Record<string, T> {
            return this.record;
        }
    };
}

const StringMemoryData = memoryData<string>();

const stringMemoryData = new StringMemoryData();
stringMemoryData.set("name", "Smith");
console.log(stringMemoryData.get("name"));
console.log(stringMemoryData.getObject());

// mixins starts from here

type Constructor<U> = new (...args: any[]) => U;

function Dumper<
    T extends Constructor<{
        getObject(): object;
    }>
>(Base: T) {
    return class Dumper extends Base {
        dump() {
            console.log(this.getObject());
        }
    };
}

const StringDumper = Dumper(StringMemoryData);
const stringDDumper = new StringDumper();
stringDDumper.set("name", "Jully");
stringDDumper.dump();