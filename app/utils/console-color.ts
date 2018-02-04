const colorReset = '\x1b[0m';
const colorDim = '\x1b[2m';

const colorBlack = '\x1b[30m';
const colorRed = '\x1b[31m';
const colorMagenta = '\x1b[35m';
const colorCyan = '\x1b[36m';


[
  ['warn', colorMagenta],
  ['error', colorRed],
  ['log', colorCyan],
].forEach( function(pair) {
  const method = pair[0], reset = colorReset, color = colorBlack + pair[1];
  console[method] = console[method].bind(console, color, `[${method.toUpperCase()}]`, reset);
});


/**
 * To make the text also of certain color
 */

/**
interface Console {
  errorC(message?: any, ...optionalParameters: any[]):  void;
  logC(message?: any, ...optionalParameters: any[]):  void;
  warnC(message?: any, ...optionalParameters: any[]):  void;
}

console.logC = (message?: any, ...optionalParameters: any[]) => {
  console.log(colorCyan, message, colorReset);
};

console.warnC = (message?: any, ...optionalParameters: any[]) => {
  console.warn(colorCyan, message, colorReset);
};

console.errorC = (message?: any, ...optionalParameters: any[]) => {
  console.error(colorCyan, message, colorReset);
};
*/
