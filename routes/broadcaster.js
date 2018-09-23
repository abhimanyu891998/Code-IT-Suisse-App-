import { Router } from "express";
import axios from 'axios'
var router = Router();

router.post('/message-broadcast', function (req, res, next) {
     
    var input = req.body['data'];
    var graph = [];
    for(var i=0 ; i<input.length ; i++)
    {
        var fromTo = input[i].split('->');
        var temp = [];
        
        graph[i].push(fromTo[1]);
    }

    for(var i=0 ; i<graph.length ; i++)
    {
        console.log(graph[i]);
    }

    res.send("testing");
    

});


export default router;
