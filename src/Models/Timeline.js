

export default class Timeline {

    constructor(){

        this.state = {

            id: String,
            name: String,
            stories: Array,
            conditional: Boolean,
            main: Boolean,
            creator: String,
            book: String,
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
                stories,
                conditional,
                main,
                creator,
                book,
                createDate,
                lastUpdate,
                parent,
                conditionalParentBlock

            } = data;

            // set values
            this.state = {
                id,
                name,
                stories,
                conditional,
                main,
                creator,
                book,
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

    // Stories
    getStories(){ return  this.state.stories }
    setStories(data){     this.state.stories = data }

    // Conditional
    getConditional(){ return  this.state.conditional }
    setConditional(data){     this.state.conditional = data }

    // Main
    getMain(){ return  this.state.main }
    setMain(data){     this.state.main = data }

    // Creator
    getCreator(){ return  this.state.creator }
    setCreator(data){     this.state.creator = data }

    // Book
    getBook(){ return  this.state.book }
    setBook(data){     this.state.book = data }

    // Create Date
    getCreateDate(){ return  this.state.createDate }
    setCreateDate(data){     this.state.createDate = data }

    // Last Update
    getLastUpdate(){ return  this.state.lastUpdate }
    setLastUpdate(data){     this.state.lastUpdate = data }

    // Parent
    getParent(){ return  this.state.parent }
    setParent(data){     this.state.parent = data }

    // Conditional Parent Block
    getConditionalParentBlock(){ return  this.state.conditionalParentBlock }
    setConditionalParentBlock(data){     this.state.conditionalParentBlock = data }    

}
