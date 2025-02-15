class Personality
{
    constructor(name, dominating_attrs = [])
    {
        this.name = name;
        this.dominating_attrs = dominating_attrs;
    }

    add(attr)
    {
        this.dominating_attrs.add(attr);
    }
}