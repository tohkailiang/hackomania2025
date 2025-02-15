export default class Personality
{
    constructor(name)
    {
        this.name = name;
        this.bestattr;
        this.worstattr;

        ///home/anggun/hackomania2025/public/sprites/results/elephant.png
        this.relations = [];
        this.logo = "./sprites/results/" + name.toLowerCase() +".png";
        this.quotes = [];
        this.reviews = [];
        this.traits = [];
    }

    addBestAttribute(attr)
    {
        this.bestattr = attr;
    }

    addWorstAttribute(attr)
    {
        this.worstattr = attr;
    }

    addRelations(relations)
    {
        for(let i = 0; i < relations.length; ++i)
        {
            this.relations.push("./sprites/results/" + relations[i].toLowerCase() +".png");
        }
    }

    addQuotes(quote)
    {
        this.quotes = quote;
    }

    addReviews(review)
    {
        this.reviews = review;
    }

    addTraits(trait)
    {
        this.traits = trait;
    }
}