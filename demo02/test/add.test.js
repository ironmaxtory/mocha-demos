import { add } from '../add.js';

// Mocha 本身不带断言库；
// 引入 chai 断言库，并制定使用它的 expect 断言风格
import { expect } from 'chai';

// describe 块称为“测试套件”（test suite）
describe('#ES6测试', function(){
  // it 块称为“测试用例”（test case）
  it('should return sum when params are number', function(){
    expect(add(1, 2)).to.be.equal(3);
  });

  it('should return NaN when params are not both number', function(){
    expect(isNaN(add(1, {}))).to.be.equal(true);
    expect(isNaN(add(undefined, {}))).to.be.equal(true);
    expect(isNaN(add(1, 'string'))).to.be.equal(true);
  });
  
  it('es6 test', ()=>{
    expect(new Set()).to.be.an.instanceof(Set);
  })
});
