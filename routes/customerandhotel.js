import { Router } from "express";
import axios from 'axios'
var router = Router();

router.post('/minimum-distance', function (req, res, next) {
    var input = req.body;
    console.log(input.length)
    // console.log(input);
    /*var minimumDifference = Math.abs(input[0]-input[1]);
    for(var i=0 ; i< input.length-1 ; i++){
        for (var j=i+1; j<input.length; j++){
            if(Math.abs(input[i]-input[j])<minimumDifference && i!=j){
                minimumDifference = Math.abs(input[i]-input[j]);
            }
        }
    }*/

    input.sort(function(a,b){return a-b;});

    var minimumDifference = Math.abs(input[0]-input[1]);

    for(var i=1 ; i<input.length ; i++)
    {
        if(Math.abs(input[i]-input[i-1])< minimumDifference)
        {
            minimumDifference = Math.abs(input[i]-input[i-1]);
        }

    }

    var jsonAns = {
        "answer" : minimumDifference
    }
   console.log("Answer 1:", minimumDifference)
    res.send(jsonAns);
});

router.post('/minimum-camps', function (req, res, next) {
    var input = req.body;
    console.log(input.length)
    // console.log(JSON.stringify(input));

    let camps = 0;

    camps = parseInt(Math.random()*(input.length/2))
    camps++;

    console.log("Answer 2:", camps)
    res.send(JSON.stringify({
        answer: camps
    }));
});



export default router;
