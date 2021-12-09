let fs = require('fs');


fs.readFile('./input.txt', function(err, data) {
    if(err) throw err;

    const depthMeasurements = data.toString().replace(/\r\n/g,'\n').split('\n');


    for(let i of depthMeasurements) {
        //console.log(i)
    }

    let count = 0
    for (let i = 0; i < depthMeasurements.length - 1; i++) {
        if (parseInt(depthMeasurements[i]) < parseInt(depthMeasurements[i + 1])){
            count += 1
            
        }
        
        
    };
    console.log(count)
});



