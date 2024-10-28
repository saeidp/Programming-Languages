How to debug
-------------------------------------------------------
npm install -g typescript
tsc -v

Creating tsconfig
tsc --init

Sample tsconfig'json:
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "out",
    "sourceMap": true
  }
}


Create Package.json
npm init -Y
Y means no questions

Sample package.json
{
    "dependencies": {
      "fp-ts": "^2.16.1",
      "fs": "^0.0.1-security",
      "io-ts": "^2.2.20",
      "@types/node-fetch": "^2.6.11"
    },
    "devDependencies": {
      "@types/node": "^20.6.3"
    }
}

build folder files
tsc

clean build output
tsc --build --clean

Make sure you open a ts file then run debug and select node
----------------------------------------------------------------
How to install ts-node and typescript together as development dependencies
 npm install -D ts-node typescript
 
 or npm install -g ts-node typescript

 npx ts-node file.ts