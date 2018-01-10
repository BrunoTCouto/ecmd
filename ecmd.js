var spawn = require('cross-spawn');

function Cmd() {
    Cmd.prototype.execute = function (command, parameters, values) {
        return new Promise((resolve, reject) => {
            
            //----- Pseudo switch -----
            var callbacks = {};

            function add(_case, fn, value) {
                callbacks[_case] = callbacks[_case] || {};
                callbacks[_case].function = fn
                callbacks[_case].value = value
            }

            function pseudoSwitch(value) {
                if (callbacks[value]) {
                    obj = callbacks[value]
                    obj['function'](obj['value']);
                }
            }

            if (values != null) {
                for (x = 0; x < values.length; x++) {
                    add(values[x][0], function (value) {
                        child.stdin.write(value + '\n\r');
                    }, values[x][1]);
                }
            }
            //----- Pseudo switch -----

            //----- set code to be executed and execute-----
            if (command != null && command != "") {
                var child = spawn(command, parameters, {
                    stdout: 'inherit',
                    stdin: 'inherit',
                    shell: true
                });
                //----- set code to be executed and execute-----

                console.log("Executing: " + command + " " + parameters)

                //----- put values into user prompted values -----
                child.stdout.on('data', (data) => {
                    console.log(data.toString())
                    pseudoSwitch(data.toString().trim())
                });

                child.on('error', (status) => {});

                child.on('close', (status) => {
                    console.log("Finishing command...")
                    child.stdin.end()
                    if (status != 0) {
                        reject()
                    } else {
                        resolve()
                    }
                });
                //----- put values into user prompted values -----

                //----- End Cli -----




                //----- End Cli -----
            } else {
                console.log("ecmd command cannot be null!")
                reject()
            }

        })

    }
}
module.exports = Cmd;