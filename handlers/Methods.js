const {resolve} = require('path');

/**
 * @author Sora
 * @param method
 * @param args
 */
module.exports.use = (method, ...args) => {
    let methodPath = resolve('./methods/', method);
    let returnedMethod = require(methodPath);
    returnedMethod(...args);
};