import Attributes from './attributes.js';

export default class User {

    constructor()
    {
        this.attributesScores = Array.from({ length: Object.keys(Attributes.AttributeType).length }, () => 0);
        this.randomstatistic;
    }

    addScore(attributes = [])
    {
        if(attributes.length != 5)
        {
            throw new Error("Wrong number of elements");
        }

        for(let i = 0; i < attributes.length; ++i) 
        {
            this.attributesScores[i] += attributes[i];
        }
    }

    addRandomStatistic()
    {
        // hardcoded statistics but putting this function here to remember how to implement
    }
}