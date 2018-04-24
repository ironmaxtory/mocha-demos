var add = require('../add').add;
// Mocha 本身不带断言库；
// 引入 chai 断言库，并制定使用它的 expect 断言风格
var expect = require('chai').expect;


// describe 块称为“测试套件”（test suite）
describe('#add', function(){
  // it 块称为“测试用例”（test case）
  it('should return sum when params are number', function(){
    expect(add(1, 2)).to.be.equal(3);
  });

  it('should return NaN when params are not both number', function(){
    expect(isNaN(add(1, {}))).to.be.equal(true);
    expect(isNaN(add(undefined, {}))).to.be.equal(true);
    expect(isNaN(add(1, 'string'))).to.be.equal(true);
  });
});

describe('#cases', function(){
  it('equal test', function(){
    var foo = { bar: 'baz' };
    expect(4+5).to.be.equal(9);
    expect(4+5).to.be.equal(10);
    expect(foo).to.be.deep.equal({ bar: 'baz' });
  });

  it('boolean test', function(){
    expect('test').to.be.ok;
    expect(false).to.not.be.ok;
  });

  it('type test', function(){
    var foo = { bar: 'baz' };
    expect('text').to.be.a('string');
    expect([]).to.be.an('array');
    expect(foo).to.be.an.instanceof(Object);
  });

  it('include test', function(){
    expect([1, 2, 3]).to.include(2);
    expect('foobar').to.contain('foo');
    expect({ foo: 'bar' }).to.include.keys('foo');
  });

  it('empty test', function(){
    expect([]).to.be.empty;
    expect({}).to.be.empty;
    expect('').to.be.empty;
  });

  it('match test', function(){
    expect('foobar').to.match(/^foo/);
  });
});
