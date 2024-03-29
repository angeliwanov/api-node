//blocking
const fs = require('fs');
const path = require('path');
const read = async () => {
  const result = await fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8');
  console.log(result)
}
read();
console.log('hi')