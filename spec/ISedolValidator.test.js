const {ISedolValidator} = require('../src/ISedolValidator')

describe('Validator', () => {
    let validator

    describe('Null, empty or improper lengths', () => {

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
    })

    describe('Valid sedol identifier tests', () => {

        test('0709954 is a valid Sedol identifier', () => {
            validator = new ISedolValidator("0709954")
            validator.validate()
            expect(validator.state.isValidSedol).toEqual(true)
            expect(validator.state.validationDetails).toEqual(null)
        })

        test('B0YBKJ7 is a valid Sedol identifier', () => {
            validator = new ISedolValidator("B0YBKJ7")
            validator.validate()
            expect(validator.state.isValidSedol).toEqual(true)
            expect(validator.state.validationDetails).toEqual(null)
        })

        test('9123458 is a valid Sedol identifier', () => {
            validator = new ISedolValidator("9123458")
            validator.validate()
            expect(validator.state.isValidSedol).toEqual(true)
            expect(validator.state.validationDetails).toEqual(null)
        })

        test('9ABCDE1 is a valid Sedol identifier', () => {
            validator = new ISedolValidator("9ABCDE1")
            validator.validate()
            expect(validator.state.isValidSedol).toEqual(true)
            expect(validator.state.validationDetails).toEqual(null)
        })
    })

    describe('Invalid sedol identifier tests', () => {

        test('1234567 is not a valid Sedol identifier', () => {
            validator = new ISedolValidator("1234567")
            validator.validate()
            expect(validator.state.isValidSedol).toEqual(false)
            expect(validator.state.validationDetails).toEqual("Checksum digit does not agree with the rest of the input")
        })

        test('9123451 is not a valid Sedol identifier', () => {
            validator = new ISedolValidator("9123451")
            validator.validate()
            expect(validator.state.isValidSedol).toEqual(false)
            expect(validator.state.validationDetails).toEqual("Checksum digit does not agree with the rest of the input")
        })

        test('9ABCDE8 is not a valid Sedol identifier', () => {
            validator = new ISedolValidator("9ABCDE8")
            validator.validate()
            expect(validator.state.isValidSedol).toEqual(false)
            expect(validator.state.validationDetails).toEqual("Checksum digit does not agree with the rest of the input")
        })
    })
})