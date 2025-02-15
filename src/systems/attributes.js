class Attributes {

    // adapted from the Big Five personalities
    static AttributeType = {
        OPENNESS: 'Openness to Experience',
        CONSCIENTIOUSNESS: 'Conscientiousness',
        EXTRAVERSION: 'Extraversion',
        AGREEABLENESS: 'Agreeableness',
        NEUROTICISM: 'Neuroticism'
    };

    constructor(attribute)
    {
        this.attribute = attribute;
    }

}