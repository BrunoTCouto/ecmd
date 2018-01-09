var spawn = require('cross-spawn');

function Cmd() {
    Cmd.prototype.execute = function (command, parameters, values) {

        //----- Pseudo switch -----
        var callbacks = {};

        function add(_case, fn, value) {
            callbacks[_case] = callbacks[_case] || [];
            callbacks[_case]['function'] = fn
            callbacks[_case]['value'] = value
        }

        function pseudoSwitch(value) {
            if (callbacks[value]) {
                obj = callbacks[value]
                console.log(obj)
                obj['function'](obj['value']);
            }
        }

        if (values != null) {
            for (x = 0; x < values.length; x++) {
                console.log(values)
                add(values[x][0], function (value) {
                    child.stdin.write(value + '\n');
                }, values[x][1]);
            }
        }

        //----- Pseudo switch -----

        //----- set code to be executed and execute-----
        if (command != null  && command !=""){
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
            }),
            //----- put values into user prompted values -----

            //----- End Cli -----
            Cmd.prototype.end = function () {
                child.stdin.end();
            }
        //----- End Cli -----
    }else{
        console.log("ecmd command cannot be null!")
    }

    }
}
module.exports = Cmd;