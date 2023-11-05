/**
 * Module dependencies.
 */
const keypress = require('keypress');

/**
 * Prompt for user input.
 */
const prompt = (msg) => {
  return (new Promise((res) => {
    process.stdout.write(msg);
    process.stdin.setEncoding('utf8');
    process.stdin.once('data', (val) => {
      res(val.trim());
    }).resume();
  })).then((res) => {
    process.stdin.pause();
    return res;
  }).catch((e) => {
    process.stdin.pause();
    return Promise.reject(e);
  });
};

/**
 * Expose `prompt`.
 */
exports = module.exports = prompt;

/**
 * Prompt for multi-line user input.
 */
exports.multiline = (msg) => {
  return (new Promise((res) => {
    const buf = [];
    console.log(msg);
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (val) => {
      if ('\n' === val || '\r\n' === val) {
        process.stdin.removeAllListeners('data');
        res(buf.join('\n'));
      } else {
        buf.push(val.trimRight());
      }
    }).resume();
  })).then((res) => {
    process.stdin.pause();
    return res;
  }).catch((e) => {
    process.stdin.pause();
    return Promise.reject(e);
  });
};

/**
 * Parse a boolean `str`.
 *
 * @param {String} str
 * @return {Boolean}
 * @api private
 */
const bool = (str) => {
  return /^y|yes|ok|true$/i.test(str);
};

/**
 * Prompt for confirmation.
 */
exports.confirm = (msg) => {
  return prompt(msg).then((val) => {
    return bool(val);
  });
};

/**
 * Prompt for password with optional mask.
 */
exports.password = (msg, mask = '*') => {
  const isTTY = process.stdin.isTTY;

  if (!isTTY) {
    return prompt(msg);
  }

  return (new Promise((rec) => {
    let buf = '';

    keypress(process.stdin);

    process.stdin.setRawMode(true);
    process.stdout.write(msg);

    process.stdin.on('keypress', (c, key) => {
      if (key && 'return' === key.name) {
        console.log();
        process.stdin.pause();
        process.stdin.removeAllListeners('keypress');
        process.stdin.setRawMode(false);
        if (!buf.trim().length) {
          return exports.password(msg, mask)(rec);
        }
        rec(buf);
        return;
      }

      if (key && key.ctrl && 'c' === key.name) {
        console.log('%s', buf);
        process.exit();
      }

      process.stdout.write(mask);
      buf += c;
    }).resume();
  })).then((res) => {
    process.stdin.pause();
    return res;
  }).catch((e) => {
    process.stdin.pause();
    return Promise.reject(e);
  });
};