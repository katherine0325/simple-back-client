const fs = require('fs');
const _ = require('lodash');
const targetName = _.upperFirst(_.camelCase(process.argv[2]));
const folderName = _.kebabCase(process.argv[2]);

fs.mkdirSync(`src/pages/${folderName}`);

const exampleBuffer = fs.readFileSync('src/pages/Example/Example.js');
const targetString = exampleBuffer.toString().replace(/Example/g, targetName);
fs.writeFileSync(`src/pages/${folderName}/${targetName}.js`, targetString);

const exampleCssBuffer = fs.readFileSync('src/pages/Example/Example.css');
const targetCssString = exampleCssBuffer.toString().replace(/Example/g, targetName);
fs.writeFileSync(`src/pages/${folderName}/${targetName}.css`, targetCssString);

const exampleActionsBuffer = fs.readFileSync('src/pages/Example/ExampleActions.js');
const targetActionsString = exampleActionsBuffer.toString().replace(/Example/g, targetName);
fs.writeFileSync(`src/pages/${folderName}/${targetName}Actions.js`, targetActionsString);

const exampleStoreBuffer = fs.readFileSync('src/pages/Example/ExampleStore.js');
const targetStoreString = exampleStoreBuffer.toString().replace(/Example/g, targetName);
fs.writeFileSync(`src/pages/${folderName}/${targetName}Store.js`, targetStoreString);
