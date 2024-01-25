// ---------------------------------------------------------------------------------------------------------------------------



console.log(`Tejas Dattatray Joshi`)

// node 12th_Input_from_Command_Line.js                 :- Tejas Dattatray Joshi
// node 12th_Input_from_Command_Line.js India           :- Tejas Dattatray Joshi
// node 12th_Input_from_Command_Line.js India US        :- Tejas Dattatray Joshi



// ---------------------------------------------------------------------------------------------------------------------------



// console.log(process)        <---- Contains too many function Try to run it

console.log(process.argv)

// node 12th_Input_from_Command_Line.js
// [
    //   'C:\\Software\\Node js\\node.exe',
//   'D:\\Web Development\\Node js Code Step By Step\\12th_Input_from_Command_Line.js'
// ]
// console.log(process.argv[0])     <----- 'C:\\Software\\Node js\\node.exe'
// console.log(process.argv[1])     <----- 'D:\\Web Development\\Node js Code Step By Step\\12th_Input_from_Command_Line.js'



// node 12th_Input_from_Command_Line.js India
// [
    //   'C:\\Software\\Node js\\node.exe',
    //   'D:\\Web Development\\Node js Code Step By Step\\12th_Input_from_Command_Line.js',
    //   'India'
// ]
// console.log(process.argv[0])     <----- 'C:\\Software\\Node js\\node.exe'
// console.log(process.argv[1])     <----- 'D:\\Web Development\\Node js Code Step By Step\\12th_Input_from_Command_Line.js'



// node 12th_Input_from_Command_Line.js India 'United State of America'
// [
    //   'C:\\Software\\Node js\\node.exe',
    //   'D:\\Web Development\\Node js Code Step By Step\\12th_Input_from_Command_Line.js',
    //   'India',
    //   'United State of America'
    // ]
    // console.log(process.argv[0])     <----- 'C:\\Software\\Node js\\node.exe'
    // console.log(process.argv[1])     <----- 'D:\\Web Development\\Node js Code Step By Step\\12th_Input_from_Command_Line.js'
    
    
    
    
// ---------------------------------------------------------------------------------------------------------------------------



const fs = require("fs")
const input = process.argv

if(input[2] == 'Add'){
    fs.writeFileSync(input[3], input[4])
}else if(input[2] == "Remove"){
    fs.unlinkSync(input[3])
}else{
    console.log(`Invalid Input`)
}


// 1) node 12th_Input_from_Command_Line.js Add Apple.txt 'This is Node.js Tutorial'
//       ----> Create "Apple.txt" file with content = "This is Node.js Tutorial"
// 2) node 12th_Input_from_Command_Line.js Remove Apple.txt
//       ----> Remove "Apple.txt" file
// 3) node 12th_Input_from_Command_Line.js India
//       ----> Output :- Invalid Input




// ---------------------------------------------------------------------------------------------------------------------------