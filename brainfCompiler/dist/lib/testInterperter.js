"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compiler = void 0;
const asciiParser_1 = require("./asciiParser");
class Compiler {
    constructor() {
        let memory = new Array(3000).fill(0);
        let pointer = 0;
        this.pointer = pointer;
        this.memory = memory;
    }
    run(code) {
        // Loop through every element in the string to determine what it is
        for (let i in code) {
            switch (code[i]) {
                case "+":
                    this.memory[this.pointer]++;
                    break;
                case "-":
                    this.memory[this.pointer]--;
                    break;
                case "<":
                    if (this.pointer != 0) {
                        this.pointer--;
                    }
                    else {
                        throw new Error("Pointer cannot be less than 0");
                    }
                    break;
                case ">":
                    if (this.pointer > this.memory.length) {
                        throw new Error("Stack Overflow: Pointer cannot be greator than 3000");
                    }
                    this.pointer++;
                    break;
                case ".":
                    // Console log the parsed output
                    let string = (0, asciiParser_1.parseCharCode)(this.memory[this.pointer]);
                    process.stdout.write(string);
                    break;
            }
        }
    }
}
exports.Compiler = Compiler;
