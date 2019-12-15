// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*
function strConst(n){
    let str=''
    for (let i = 0; i<n; i++){
        str += "#"
    }
    return str
}

function steps(n) {
    for (let i = 1; i<=n; i++){
         let str = ''
        str = strConst(i)
        if(str.length < n){    
        for (let i = str.length; i<n; i++){
            str += " "
        }}
        console.log(str)
    }
    return
}

function steps(n){
    if (!n){return}
     for (let i=1; i<=n; i++){
        let str=""
         for (let j=0; j<i; j++){
             str+="#"
         }
         if(str.length < n){
            for (let z = str.length; z<n; z++){
                 str += " "
        }}
         console.log(str)
         }
     }

function steps(n){
     for (let i=0; i<n; i++){
        let str=""
         for (let j=0; j < n; j++){
             if(j <= i){
                 str+="#"
             } else {
                 str+=" "
             }         
         }
        console.log(str)
     }
    return
}
*/

function steps(n, row = 0, stair = ''){
    if(row === n){return;}

    if(stair.length === n){
       console.log(stair);
       return steps(n, row + 1);
    }

    let add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
}

module.exports = steps;
