
# async-prompt

  Sane terminal user-input for nodejs that return thunks for Promise.

## Installation

```
$ npm install async-prompt
```

## Examples

```js
const name = await prompt('username: ');
const pass = await password('password: ');
const desc = await multiline('description: ');
const ok = await confirm('are you sure? ');
```

## API

### prompt(msg)

  Prompt for user input with `msg`.

### prompt.password(msg, [mask])

  Prompt for password input with `msg` and optional `mask`
  defaulting to "*".
  
  *if run without tty, will use prompt(msg) instead*

### prompt.multiline(msg)

  Prompt for multi-line input with `msg`.

### prompt.confirm(msg)

  Prompt for confirmation with `msg`.

## License

  MIT

## 
Forked from [co-prompt](https://github.com/tj/co-prompt)