const fs = require('fs'),
    {resolve} = require('path');

module.exports = async (options) => {
    fs.readdir("./"+options.folder+"/", (err, content) => {
        if (err) console.log(err);
        let groups = [];
        for (let element of content){
            if (!element.includes('.')) groups.push(element);
        }

        for (const folder of groups){
            fs.readdir("./"+options.folder+"/" + folder, (e, files) => {
                let js_files = files.filter(f => f.split(".").pop() === "js");
                if (js_files.length < 1) return;
                if (e) console.log(e);
                for (const element of js_files) {
                    let props = require("./"+options.folder+"/" + folder + '/' + element);
                    client.logger.log(`Loading Command: ${element.split('.')[0]} of ${folder} module`)

                    if (process.stdout.moveCursor) {
                        process.stdout.moveCursor(0, -1);
                    }
                    if (process.stdout.clearLine) {
                        process.stdout.clearLine();
                    }

                    client.commands.set(element.split('.')[0], props);
                    if (props.conf && props.conf.aliases) {
                        for (let alias of props.conf.aliases){
                            client.aliases.set(alias, props)
                        }
                    }
                }
            });
        }
    });
};
