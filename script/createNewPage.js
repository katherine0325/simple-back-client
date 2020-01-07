const fs = require('fs');
const targetName = process.argv[2];

fs.mkdir(`src/pages/${targetName}`);

const exampleBuffer = fs.readFileSync('src/pages/Example/Example.js');
const targetString = exampleBuffer.toString().replace(/Example/g, targetName);
fs.writeFileSync(`src/pages/${targetName}/${targetName}.js`, targetString);

const exampleActionsBuffer = fs.readFileSync('src/pages/Example/ExampleActions.js');
const targetActionsString = exampleActionsBuffer.toString().replace(/Example/g, targetName);
fs.writeFileSync(`src/pages/${targetName}/${targetName}Actions.js`, targetActionsString);

const exampleStoreBuffer = fs.readFileSync('src/pages/Example/ExampleStore.js');
const targetStoreString = exampleStoreBuffer.toString().replace(/Example/g, targetName);
fs.writeFileSync(`src/pages/${targetName}/${targetName}Store.js`, targetStoreString);
