///<reference path="../globals.ts" />
/**
* Isaiah Miller
* Last Updated: 11/5/14
*/
var TSOS;
(function (TSOS) {
    var Memory = (function () {
        function Memory(memory) {
            if (typeof memory === "undefined") { memory = []; }
            this.memory = memory;
        }
        Memory.prototype.init = function () {
            for (var i = 0; i < 1536; i++) {
                this.memory[i] = 0;
            }
        };

        Memory.prototype.getMemoryBlock = function (i) {
            return this.memory[i];
        };

        Memory.prototype.setMemoryBlock = function (index, value) {
            this.memory[index] = value;
        };
        return Memory;
    })();
    TSOS.Memory = Memory;
})(TSOS || (TSOS = {}));
