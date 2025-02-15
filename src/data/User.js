export default class User {

    constructor()
    {
        this.attributesScores = [0, 0, 0, 0, 0];
    }

    addScore(attributes)
    {
        console.log("before:", this.attributesScores);
        if(attributes.length != 5)
        {
            throw new Error("Wrong number of elements");
        }

        for(let i = 0; i < attributes.length; ++i) 
        {
            this.attributesScores[i] += attributes[i];
        }
        console.log("after:", this.attributesScores);
    }
}