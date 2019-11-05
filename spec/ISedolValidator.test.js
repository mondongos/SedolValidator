const {ISedolValidator} = require('../src/ISedolValidator')

describe('Validator', () => {
    let validator

    test('it returns false when input string is null', () => {
        validator = new ISedolValidator(null)
        validator.basicVal()
        expect(validator.state.isValidSedol).toEqual(false)
        expect(validator.state.validationDetails).toEqual("Input string was not 7-characters long")
    })

    test('it returns false when input string is blank', () => {
        validator = new ISedolValidator("")
        validator.basicVal()
        expect(validator.state.isValidSedol).toEqual(false)
        expect(validator.state.validationDetails).toEqual("Input string was not 7-characters long")
    })

    test('it returns false when input string is less than 7 chars', () => {
        validator = new ISedolValidator(1234)
        validator.basicVal()
        expect(validator.state.isValidSedol).toEqual(false)
        expect(validator.state.validationDetails).toEqual("Input string was not 7-characters long")
    })

    test('it returns false when input string is less than 7 chars', () => {
        validator = new ISedolValidator("abcd")
        validator.basicVal()
        expect(validator.state.isValidSedol).toEqual(false)
        expect(validator.state.validationDetails).toEqual("Input string was not 7-characters long")
    })
})