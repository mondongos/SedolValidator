class ISedolValidator {
    constructor(sedol) {
        this.state = {
            inputString: String(sedol), 
            isValidSedol: null, 
            isUserDefined: null, 
            validationDetails: ""
        }
        this.weightingFactors = [1,3,1,7,3,9,1]
        this.sedolTotal = 0
    }
    validate() {
        if(this.state.inputString === null || this.state.inputString === "" || this.state.inputString.length !== 7) {
            this.state.isValidSedol = false
            this.state.validationDetails = "Input string was not 7-characters long"
        } else {
            let sedolArr = this.state.inputString.split("")
            sedolArr.forEach((item, indexNum) => {
                if(isNaN(Number(item))) {
                    this.sedolTotal += ((item.charCodeAt() - 55) * this.weightingFactors[indexNum])
                } else {
                    this.sedolTotal += (Number(item) * this.weightingFactors[indexNum])
                }
            })
            this.checkTotal()
        }
    }

    checkTotal() {
        if(((10 - (this.sedolTotal % 10)) % 10) === 0) {
            this.state.isValidSedol = true
            this.state.validationDetails = null
        } else {
            this.state.isValidSedol = false
            this.state.validationDetails = "Checksum digit does not agree with the rest of the input"
        }
    }
}

module.exports = {ISedolValidator}