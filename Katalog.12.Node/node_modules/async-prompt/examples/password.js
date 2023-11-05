const prompt = require('..');
const password = prompt.password;

(async () => {
  const user = await prompt('username: ');
  const pass = await password('password: ');

  console.log('user: %s', user);
  console.log('pass: %s', pass);
})();
