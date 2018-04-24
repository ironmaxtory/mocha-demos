import { add } from '../add.js';

// Mocha 本身不带断言库；
// 引入 chai 断言库，并制定使用它的 expect 断言风格
import { expect } from 'chai';

const request = require('request');
const fetch = require('fetch');


// describe 块称为“测试套件”（test suite）
describe('#测试用例管理：只运行部分', ()=>{
  // it 块称为“测试用例”（test case）
  it.only('测试管理：带only', ()=>{
    expect(add(1, 2)).to.be.equal(3);
  });
  it('测试管理：不带only', ()=>{
    expect(add(2, 2)).to.be.equal(4);
  });
});

describe('#测试用例管理：不运行部分', ()=>{
  it('测试管理：不带skip', ()=>{
    expect(add(1, 2)).to.be.equal(3);
  });
  it.skip('测试管理：带skip', ()=>{
    expect(add(2, 2)).to.be.equal(4);
  });
});
