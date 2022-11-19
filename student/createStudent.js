console.log('aaaaa')

function studentBuilder(name, age) {
    return {
        name,
        age,
        sleep: () => {
            console.log(`No sleep. I am Student`)
        }
    }
}

module.exports={
    studentBuilder
}


// or

// module.exports.fName = studentBuilder;
// module.exports.lesson = 1

// module.exports = {
//     creator: (name, age) => {
//         return {
//             name,
//             age,
//             sleep: () => {
//                 console.log(`No sleep. I am Student`)
//             }
//         }
//     },
//     lesson: 'FS'
//
// }