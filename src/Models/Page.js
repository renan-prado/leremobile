

export default class Page {

    constructor(){
        this.state = {

            id: String,
            name: String,
            blocks: Array,
            creator: String,
            createDate: Date,
            lastUpdate: Date,
            parent: String
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
                blocks,
                creator,
                createDate,
                lastUpdate,
                parent

            } = data;

            // set values
            this.state = {
                id,
                name,
                blocks,
                creator,
                createDate,
                lastUpdate,
                parent
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

    // Blocks
    getBlocks(){ return  this.state.blocks }
    setBlocks(data){     this.state.blocks = data }

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

}