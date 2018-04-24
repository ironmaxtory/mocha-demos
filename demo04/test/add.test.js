import { add } from '../add.js';

// Mocha 本身不带断言库；
// 引入 chai 断言库，并制定使用它的 expect 断言风格
import { expect } from 'chai';

const request = require('request');
const fetch = require('fetch');


// describe 块称为“测试套件”（test suite）
describe('#测试用例的钩子', ()=>{
  var finished = false;
  // 本区块所有测试用例之前执行
  // 方式1
  before((done)=>{
    setTimeout(()=>{
      finished = true;
      done();
    }, 100);
  });
  // 方式2
  // before(()=>{
  //   return new Promise((resolve, reject)=>{
  //     setTimeout(()=>{
  //       finished = true;
  //       resolve(true);
  //     }, 100);
  //   })
  // });

  // 本区块所有测试用例之后执行
  after(()=>{

  });
  // 本区块的每个测试用例之前执行
  beforeEach(()=>{

  });
  // 本区块的每个测试用例之后执行
  afterEach(()=>{

  });

  // it 块称为“测试用例”（test case）
  it('测试钩子：before', ()=>{
    expect(finished).to.be.equal(true);
  });
});
