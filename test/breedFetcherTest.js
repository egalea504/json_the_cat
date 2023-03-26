// breedFetcherTest.js

const { fetchBreedDescription } = require('../index.js');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      // we expect no error for this scenario
      assert.isNull(error);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      console.log(desc);
      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('returns an error for invalid breed, via callback', (done) => {
    fetchBreedDescription('dog', (error, desc) => {
      // we expect no error for this scenario
      assert.equal(error, null);

      const expectedDesc = null;
      console.log(desc);
      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});