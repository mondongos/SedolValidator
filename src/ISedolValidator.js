class ISedolValidator {
    constructor(sedol) {
        this.state = {
            inputString: String(sedol), 
            isValidSedol: null, 
            isUserDefined: null, 
            validationDetails: ""
        }
    }
    validate() {
        if(this.state.inputString === null || this.state.inputString === "" || this.state.inputString.length !== 7) {
            this.state.isValidSedol = false
            this.state.validationDetails = "Input string was not 7-characters long"
        } else {
            
        }
    }
}

module.exports = {ISedolValidator}
