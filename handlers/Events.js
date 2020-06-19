const fs = require('fs'),
    {resolve} = require('path');

module.exports = async (options) => {
    fs.readdir(''+options.path+'', (err, content) => {
        if (err) console.log(err);
        if (content.length < 1) return;
        let groups = [];
        for (let element of content){
            if (!element.includes('.')) groups.push(element);
        }
        for (const folder of groups) {
            fs.readdir(''+options.path+'' + folder, (e, files) => {
                let js_files = files.filter(f => f.split(".").pop() === "js");
                if (js_files.length < 1) return;
                if (e) console.log(e);
                for (const element of js_files) {
                    let props = require(resolve(''+options.path+'' + folder + '/' + element));
                    options.client.logger(`Loading Event: ${element.split('.')[0]}`, 'log')
                    options.client.on(element.split('.')[0], props.bind(null, options.client));
                }
            });
        }
    });
};