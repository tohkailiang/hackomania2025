import personalitiesData from '../../public/data/personalities.json';
import Personality from './personality.js'
import Result from './data/Result.js'

// this is the thing you will get in the end
export class Personalities {
    constructor()
    {
        this.personalities = [];
        this.counter= 0;
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
        const bestAttribute = Math.max(...user.attributesScores);
        const worstAttribute = Math.min(...user.attributesScores);

        return this.getPersonalityBasedOnAttribute(bestAttribute, worstAttribute);
    }

    giveResult(user)
    {
        const personality = this.generatePersonality(user);
        var result = new Result();
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
        for(let i = 0; i < this.personalities.length; ++i)
        {
            if(this.personalities[i].bestattr != bestAttri)
            {
                continue;
            }

            if(this.personalities[i] != worstAttri)
            {
                continue;
            }
            return this.personalities[i];
        }
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