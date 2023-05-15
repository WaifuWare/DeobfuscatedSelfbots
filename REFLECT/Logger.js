const c = require(`chalk`);

exports.warn = (...message) => {
  console.log(c.white(`[?]`))
  console.warn(...message);
  console.log(c.white(`[?]`))
};

exports.error = (...message) => {
  console.log(c.red(`[!]`))
  console.warn(...message);
  console.log(c.red(`[!]`))
};

exports.info = (...message) => {
  console.log(c.cyanBright(`[+] ` + c.white(...message)));
};

exports.message = message => {
  console.log(c.cyanBright(`[+] ` + c.white(...message)));
};
