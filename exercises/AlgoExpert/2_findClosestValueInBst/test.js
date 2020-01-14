
const program = require('./program');
const chai = require('chai');

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
}

const test = new BST(100)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(1)
  .insert(22)
  .insert(1)
  .insert(1)
  .insert(3)
  .insert(1)
  .insert(1)
  .insert(502)
  .insert(55000)
  .insert(204)
  .insert(205)
  .insert(207)
  .insert(206)
  .insert(208)
  .insert(203)
  .insert(-51)
  .insert(-403)
  .insert(1001)
  .insert(57)
  .insert(60)
  .insert(4500);

it('Test Case #1', function () {
  chai.expect(program.findClosestValueInBst(test, 100)).to.deep.equal(100);
});

it('Test Case #2', function () {
  chai.expect(program.findClosestValueInBst(test, 208)).to.deep.equal(208);
});

it('Test Case #3', function () {
  chai.expect(program.findClosestValueInBst(test, 4500)).to.deep.equal(4500);
});

it('Test Case #4', function () {
  chai.expect(program.findClosestValueInBst(test, 4501)).to.deep.equal(4500);
});

it('Test Case #5', function () {
  chai.expect(program.findClosestValueInBst(test, -70)).to.deep.equal(-51);
});

it('Test Case #6', function () {
  chai.expect(program.findClosestValueInBst(test, 2000)).to.deep.equal(1001);
});

it('Test Case #7', function () {
  chai.expect(program.findClosestValueInBst(test, 6)).to.deep.equal(5);
});

it('Test Case #8', function () {
  chai.expect(program.findClosestValueInBst(test, 30000)).to.deep.equal(55000);
});

it('Test Case #9', function () {
  chai.expect(program.findClosestValueInBst(test, -1)).to.deep.equal(1);
});

it('Test Case #10', function () {
  chai.expect(program.findClosestValueInBst(test, 29751)).to.deep.equal(55000);
});

it('Test Case #11', function () {
  chai.expect(program.findClosestValueInBst(test, 29749)).to.deep.equal(4500);
});