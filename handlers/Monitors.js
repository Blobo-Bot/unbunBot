const {resolve} = require('path');

/**
 * @author Sora
 * @param monitor
 * @param args
 */
module.exports.use = (monitor, ...args) => {
    let monitorPath = resolve('./monitors/', monitor);
    let returnedMonitor = require(monitorPath);
    returnedMonitor(...args);
};