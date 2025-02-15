export default class Personality
{
    constructor(name)
    {
        this.name = name;
        this.bestattr;
        this.worstattr;

        this.relations = [];
        this.logo = name;
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
        this.relations = relations;
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