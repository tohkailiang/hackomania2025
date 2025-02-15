import personalitiesData from '../data/personalities.json';
import Personality from './personality.js';
import Result from '../data/Result.js';
import User from '../data/User.js';
import Attributes from './attributes.js';


// this is the thing you will get in the end
export class Personalities {
    constructor()
    {
        this.personalities = [];
        this.counter= 0;
        this.personalities = loadPersonalities();
    }

    add(personality)
    {
        console.log(personality);
        console.log(this.counter);
        this.counter += 1;
        this.personalities.push(personality);
    }

    generatePersonality(user)
    {
        console.log(user);
        const attributeScores = user.getAttributesScores();
        const bestAttribute = Math.max(...user.getAttributesScores());
        const worstAttribute = Math.min(...user.getAttributesScores());
        const bestAttrIndex = attributeScores.indexOf(bestAttribute);
        const worstAttrIndex = attributeScores.indexOf(worstAttribute);
        var meep = this.getPersonalityBasedOnAttribute(bestAttrIndex, worstAttrIndex);
        console.log(meep);
        return meep;
    }

    giveResult(user, result)
    {
        const personality = this.generatePersonality(user);
        result.setAffinities(personality.relations);
        result.setLogo(personality.logo);
        result.setQuotes(personality.quotes);
        result.setReviews(personality.reviews);
        result.setTraits(personality.traits);
        result.setTitle(personality.name);
        return result;
     }

    getPersonalityBasedOnAttribute(bestAttri, worstAttri)
    {
        console.log(this.personalities);
            // Get the enum values array to access by index
    const attributeTypes = Object.values(Attributes.AttributeType);
    const bestAttrType = attributeTypes[bestAttri];
    const worstAttrType = attributeTypes[worstAttri];
        console.log("best attri: " + bestAttrType);
        console.log("worst attri: " + worstAttrType);
        for(let i = 0; i < this.personalities.length; ++i)
            {
                //console.log("checking");
                //console.log(this.personalities[i]);
                //console.log(this.personalities[i].bestattr);
                //console.log(this.personalities[i].worstattr);
                if(Attributes.AttributeType[this.personalities[i].bestattr] === bestAttrType
                   && Attributes.AttributeType[this.personalities[i].worstattr] === worstAttrType) {
                    //console.log("meep1");
                    return this.personalities[i];
                }
            }

            // If no exact match is found, return the first personality that matches best attribute
            for(let i = 0; i < this.personalities.length; ++i)
            {
                if(Attributes.AttributeType[this.personalities[i].bestattr] === bestAttrType) {
                    //console.log("meep2");
                    return this.personalities[i];
                }
            }

            // Fallback to first personality if no match found
            if (this.personalities.length > 0) {
                //console.log("meep3");
                return this.personalities[0];
            }

            throw new Error('No personalities available');
    }

}

export function loadPersonalities() {
    try {
        // Use the imported JSON data directly
        const data = personalitiesData;

        // Validate and convert to Personality instances
        if (!data.personalities || !Array.isArray(data.personalities)) {
            throw new Error('Invalid format: personalities must be an array under "personalities" key');
        }

        return data.personalities.map(p => {
            if (!p.name) {
                throw new Error(`Invalid personality data: Missing required fields for ${p.name || 'unnamed personality'}`);
            }

            var personality = new Personality(p.name);
            personality.addBestAttribute(p.bestattr);
            personality.addWorstAttribute(p.worstattr);
            personality.addRelations(p.relations);
            personality.addQuotes(p.quotes);
            personality.addReviews(p.reviews);
            personality.addTraits(p.traits);
            return personality;
        });
    } catch (error) {
        console.error('Error loading personalities:', error.message);
        return [];
    }
}
