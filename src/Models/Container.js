

export default class Container {

    constructor(){
        this.state = {

            id: String,
            name: String,
            pages: Array,
            conditional: Boolean,
            creator: String,
            createDate: Date,
            lastUpdate: Date,
            parent: String,
            conditionalParentBlock: String,
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
                pages,
                conditional,
                creator,
                createDate,
                lastUpdate,
                parent,
                conditionalParentBlock

            } = data;

            // set values
            this.state = {
                id,
                name,
                pages,
                conditional,
                creator,
                createDate,
                lastUpdate,
                parent,
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

    // Pages
    getPages(){ return  this.state.pages }
    setPages(data){     this.state.pages = data }

    // Conditional
    getConditional(){ return  this.state.conditional }
    setConditional(data){     this.state.conditional = data }

    // Creator
    getCreator(){ return  this.state.creator }
    setCreator(data){     this.state.creator = data }

    // Create Date
    getCreateDate(){ return  this.state.createDate }
    setCreateDate(data){     this.state.createDate = data }

    // Last Update
    getLastUpdate(){ return  this.state.lastUpdate }
    setLastUpdate(data){     this.state.lastUpdate = data }

    // Book
    getParent(){ return  this.state.parent }
    setParent(data){     this.state.parent = data }
    
    // Conditional Parent Block
    getConditionalParentBlock(){ return  this.state.conditionalParentBlock }
    setConditionalParentBlock(data){     this.state.conditionalParentBlock = data }    
}