

export default class Story {

    constructor(){

        this.state = {

            id: String,
            name: String,
            entities: Array,
            creator: String,
            createDate: Date,
            lastUpdate: Date,
            parent: String,
            conditionalEntities: Boolean,
            conditionalParentBlock: String
        }
    }

    // State
    getData(){ return  this.state }
    setData(data){

        if( typeof data == Object ){

            // get values
            const { 
                id,
                name,
                entities,
                creator,
                createDate,
                lastUpdate,
                parent,
                conditionalEntities,
                conditionalParentBlock

            } = data;

            // set values
            this.state = {
                id,
                name,
                entities,
                creator,
                createDate,
                lastUpdate,
                parent,
                conditionalEntities,
                conditionalParentBlock
            }
        }

        else {
            console.error('Class Timeline => setData => Attribute is not object type')
        }
    }

    // Id
    getId(){ return  this.state.id }
    setId(data){     this.state.id = data }

    // Name
    getName(){ return  this.state.name }
    setName(data){     this.state.name = data }

    // Entities
    getEntities(){ return  this.state.entities }
    setEntities(data){     this.state.entities = data }

    // Creator
    getCreator(){ return  this.state.creator }
    setCreator(data){     this.state.creator = data }

    // Create Date
    getCreateDate(){ return  this.state.createDate }
    setCreateDate(data){     this.state.createDate = data }

    // Last Update
    getLastUpdate(){ return  this.state.lastUpdate }
    setLastUpdate(data){     this.state.lastUpdate = data }

    // Parent
    getParent(){ return  this.state.parent }
    setParent(data){     this.state.parent = data }

    // Conditional Entities
    getConditionalEntities(){ return  this.state.conditionalEntities }
    setConditionalEntities(data){     this.state.conditionalEntities = data }

    // Conditional Parent Block
    getConditionalParentBlock(){ return  this.state.conditionalParentBlock }
    setConditionalParentBlock(data){     this.state.conditionalParentBlock = data }    

}
