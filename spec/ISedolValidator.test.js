const {ISedolValidator} = require('../src/ISedolValidator')

describe('Validator', () => {
    let validator

    test('it returns false when input string is null', () => {
        validator = new ISedolValidator(null)
        validator.validate()
        expect(validator.state.isValidSedol).toEqual(false)
        expect(validator.state.validationDetails).toEqual("Input string was not 7-characters long")
    })

    test('it returns false when input string is blank', () => {
        validator = new ISedolValidator("")
        validator.validate()
        expect(validator.state.isValidSedol).toEqual(false)
        expect(validator.state.validationDetails).toEqual("Input string was not 7-characters long")
    })

    test('it returns false when input string is less than 7 chars', () => {
        validator = new ISedolValidator(12)
        validator.validate()
        expect(validator.state.isValidSedol).toEqual(false)
        expect(validator.state.validationDetails).toEqual("Input string was not 7-characters long")
    })

    test('it returns false when input string is more than 7 chars', () => {
        validator = new ISedolValidator(123456789)
        validator.validate()
        expect(validator.state.isValidSedol).toEqual(false)
        expect(validator.state.validationDetails).toEqual("Input string was not 7-characters long")
    })

    test('it a valid Sedol identifier', () => {
        validator = new ISedolValidator("9ABCDE1")
        validator.validate()
        expect(validator.state.isValidSedol).toEqual(true)
        expect(validator.state.validationDetails).toEqual(null)
    })

    test('is not a valid Sedol identifier', () => {
        validator = new ISedolValidator("9ABCDE2")
        validator.validate()
        expect(validator.state.isValidSedol).toEqual(false)
        expect(validator.state.validationDetails).toEqual("Checksum digit does not agree with the rest of the input")
    })
})