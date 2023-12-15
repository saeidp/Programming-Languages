import { debug } from 'console';
import { readFileSync } from 'fs';
import * as t from 'io-ts';
import { isLeft } from 'fp-ts/lib/Either';

import path = require('path');
// import * as t from 'io-ts';
// import { PathReporter } from 'io-ts/PathReporter';
// import { isLeft } from 'fp-ts/lib/Either';

let env = 'sandbox'

const raw = readFileSync(path.join(__dirname, '../src/readFileWithType.json'), 'utf8');
const rawData = JSON.parse(raw);
const envRawData = rawData[env];
// envRawData.forEach(rec => {
//     const { accountId, tags } = rec
//     console.log(accountId);
//     console.log(tags);
// });

// or
// for (const { accountId, tags } of envRawData) {
//     console.log(accountId);
//     console.log(tags);
// }

// better to use type checking
const TagIO = t.type({
    tagKey: t.string,
    tagValues: t.array(t.string)
});

const ConfigIO = t.array(
    t.type({
        accountId: t.string,
        tags: t.array(TagIO),
        databasePermissions: t.array(t.string),
        tablePermissions: t.array(t.string)
    })
);
// If a method return type needed
// export type Configs = t.TypeOf<typeof ConfigIO>;

const decoded = ConfigIO.decode(envRawData);
if (isLeft(decoded)) {
    throw new Error(`Invalid configuration file`);
}
const records = decoded.right;
records.forEach((rec) => {
    const { accountId, tags } = rec
    console.log(accountId);
    console.log(tags);
})
// or
for (const { accountId, tags } of records) {
    console.log(accountId);
    console.log(tags);
}


