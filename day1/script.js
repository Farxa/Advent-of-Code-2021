let fs = require('fs');

//                                                  --- Day 1: Sonar Sweep ---

fs.readFile('./input.txt', function(err, data) {
    if(err) throw err;

    const depthMeasurements = data.toString().replace(/\r\n/g,'\n').split('\n');


    

    // let count = 0
    // for (let i = 0; i < depthMeasurements.length - 1; i++) {
    //     if (parseInt(depthMeasurements[i]) < parseInt(depthMeasurements[i + 1])){
    //         count += 1
            
    //     }
    // }




    //                                                  --- Part II ---



    let count = 0;

    for (let i = 3; i < depthMeasurements.length; i++){
        if (parseInt(depthMeasurements[i - 3]) < parseInt(depthMeasurements[i])){
            count += 1
        }
    }

    console.log(count)

});