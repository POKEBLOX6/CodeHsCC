"use strict";
/* BrainF compiler for the CodeHS Karol exercises

General idea (for now)

you have to spell each command out using bf

Future Plans:
    Make a full instruction set for karol using specilized commands

The compiler will be all written by me except for the unit tests which is going to use the js-fuck library
*/
Object.defineProperty(exports, "__esModule", { value: true });
const testInterperter_1 = require("./lib/testInterperter");
const interperter = new testInterperter_1.Compiler();
interperter.run("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.");
