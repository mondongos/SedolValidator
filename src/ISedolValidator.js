class ISedolValidator {
    constructor(sedol) {
        this.state = {
            inputString: String(sedol), 
            isValidSedol: null, 
            isUserDefined: null, 
            validationDetails: ""
        }
        this.weightingFactors = [1,3,1,7,3,9,1]
    }
    validate() {
        if(this.state.inputString === null || this.state.inputString === "" || this.state.inputString.length !== 7) {
            this.state.isValidSedol = false
            this.state.validationDetails = "Input string was not 7-characters long"
        } else {
            let sedolArr = this.state.inputString.split("")
            let sedolTotal = 0
            sedolArr.forEach((item, indexNum) => {
                if(isNaN(Number(item))) {
                    sedolTotal += ((item.charCodeAt() - 55) * this.weightingFactors[indexNum])
                } else {
                    sedolTotal += (Number(item) * this.weightingFactors[indexNum])
                }
            })
            if(((10 - (sedolTotal % 10)) % 10) === 0) {
                this.state.isValidSedol = true
                this.state.validationDetails = null
            } else {
                this.state.isValidSedol = false
                this.state.validationDetails = "Checksum digit does not agree with the rest of the input"
            }
        }
    }
}

module.exports = {ISedolValidator}
// console.log("A".charCodeAt() - 55)
// console.log("B".charCodeAt() - 55)
