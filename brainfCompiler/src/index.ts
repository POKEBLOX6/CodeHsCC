/* BrainF compiler for the CodeHS Karol exercises

General idea (for now)

you have to spell each command out using bf

Future Plans:
	Make a full instruction set for karol using specilized commands

The compiler will be all written by me except for the unit tests which is going to use the js-fuck library
*/

import { Compiler } from "./lib/testInterperter";

const interperter = new Compiler();
interperter.run("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.");
