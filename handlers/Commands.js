const fs = require('fs'),
    {resolve} = require('path');

module.exports = async (options) => {
    fs.readdir("./"+options.path+"/", (err, content) => {
        if (err) console.log(err);
        let groups = [];
        for (let element of content){
            if (!element.includes('.')) groups.push(element);
        }

        for (const folder of groups){
            fs.readdir(options.path + folder, (e, files) => {
                let js_files = files.filter(f => f.split(".").pop() === "js");
                if (js_files.length < 1) return;
                if (e) console.log(e);
                for (const element of js_files) {
                    let props = require(resolve(options.path + folder + '/' + element ));
                    options.client.logger(`Loading Command: ${element.split('.')[0]} of ${folder} module`)

                    if (process.stdout.moveCursor) {
                        process.stdout.moveCursor(0, -1);
                    }
                    if (process.stdout.clearLine) {
                        process.stdout.clearLine();
                    }

                    options.client.commands.set(element.split('.')[0], props);
                    if (props.command && props.command.aliases) {
                        for (let alias of props.command.aliases){
                            options.client.aliases.set(alias, props)
                        }
                    }
                }
            });
        }
    });
};
