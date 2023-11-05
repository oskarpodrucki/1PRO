const prompt = require('../index');
const confirm = prompt.confirm;

(async () => {
  const ok = await confirm('are you ok? ');
  console.log('answer: %s', ok);
})();
