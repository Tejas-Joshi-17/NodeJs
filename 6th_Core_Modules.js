const fs = require("fs")                            // Import whole "fs" module
const fs_function = require("fs").writeFileSync     // Import writeFileSync function of "fs" module

fs.writeFileSync("6th_Whole_Module.md","# Import Whole 'fs' Module")
fs_function("6th_Only_Function.md","# Import writeFileSync function of 'fs' Module")


console.log(`Working Directory is :- ` + __dirname)
// Working Directory is :- D:\Web Development\Node js Code Step By Step

console.log(`Working File is :- ` + __filename)
// Working File is :- D:\Web Development\Node js Code Step By Step\6th_Core_Modules.js