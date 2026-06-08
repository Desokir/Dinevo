const fs = require('fs')
const path = require('path')

const componentName = process.argv[2]

if(!componentName) {
    console.log('Enter name component')
    process.exit(1)
}

const dir = path.join(__dirname, 'app', 'component', componentName)

if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive:true })
}

const componentTemplate = `
import './${componentName}.css';
function ${componentName}() {
    return (
        <div className='${componentName}'>
            ${componentName}
        </div>
    );
}`;

fs.writeFileSync(path.join(dir, `${componentName}.tsx`), componentTemplate)
fs.writeFileSync(path.join(dir, `${componentName}.css`), '');

console.log(`${componentName} success created in src/component`)