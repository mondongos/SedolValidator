
# M&G Distribution Candidate Test

### Summary
The objective of this exercise is to implement a SEDOL checker in JavaScript. 

The process is as follows: 
1. ISedolValidator recieves SEDOL code through constructor. 
2. `ISedolValidator.validate` runs to check to if the code is the correct length. 
3. If length is correct, `ISedolValidator.validate` calculates the sum of the code.
4. `ISedolValidator.validate` checks if the code is valid.

I made a few assumptions: 
- Assumed that all letters in the SEDOL codes provided simply consist of upper-cased letters and numbers only - I have not accounted for lower-case letters or symbols. 
- `ISedolValidator.validate` must be run manually to make it work. I could have done this through the constructor upon initialisation of the class but I was unsure if this was needed. 
- Since there is defined user, it remains false. 

### Technologies Used
- JavaScript
- NodeJS
- Jest (unit testing)

### How to use
1. Clone this repo. 
2. Run `npm install` in the terminal. 
3. Run `npm run test` in the terminal to see unit tests. 



