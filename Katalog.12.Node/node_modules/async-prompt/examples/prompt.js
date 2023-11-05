const prompt = require('..');
const multiline = prompt.multiline;

(async () => {
  const first = await prompt('first name: ');
  const last = await prompt('last name: ');
  console.log('hello %s %s\n', first, last);

  const desc = await multiline('description:');
  console.log('you describe yourself as:');
  console.log(desc);
})();
