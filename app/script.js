const semver = require('semver');
const required = '>=20.0.0';
const current = process.version;

if (!semver.satisfies(current, required)) {
  console.error(`❌ Node.js version ${current} does not satisfy required version ${required}`);
  process.exit(1);
}
