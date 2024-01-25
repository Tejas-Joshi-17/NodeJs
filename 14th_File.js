const fs = require("fs")
const path = require("path")
const Directory_Path = path.join(__dirname , "fs_module")
const File_Path = `${Directory_Path}/Apple.txt`

// Cretae File with Content
fs.writeFileSync(File_Path,`This is Sample Text`)

// Read File Content
fs.readFile(File_Path, 'utf8', (err, item) =>{
    console.log(item)           // This is Sample Text
})

// Append Data at end of old data
fs.appendFile(File_Path, " This is Tejas Joshi", (err) =>{
    if(!err)
        console.log("Data Appended Successfully!!!")        // Data Appended Successfully!!!
})

// Rename File
fs.rename(File_Path, `${Directory_Path}/Banana.txt`, (err) =>{
    if(!err)
        console.log(`File Name is Updated`)                 // File Name is Updated
})

// Delete File
fs.unlinkSync(`${Directory_Path}/Banana.txt`)
