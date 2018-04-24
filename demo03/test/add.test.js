import { add } from '../add.js';

// Mocha 本身不带断言库；
// 引入 chai 断言库，并制定使用它的 expect 断言风格
import { expect } from 'chai';

const request = require('request');
const fetch = require('fetch');


// describe 块称为“测试套件”（test suite）
describe('#异步测试', ()=>{
  // it 块称为“测试用例”（test case）
  it('异步测试用例：timeout', (done)=>{
    setTimeout(()=>{
      expect(add(1, 2)).to.be.equal(3);
      // 通知 mocha 测试结束
      done();
    }, 2100);
  });

  it('异步测试用例：request', (done)=>{
    request.get('https://api.github.com')
      .on('response', (res)=>{
        expect(res).to.be.an('object');
        done();
      });
  });

  it('异步测试用例：返回 promise', function() {
    return fetch('https://api.github.com')
      .then(function(res) {
        return res.json();
      }).then(function(json) {
        expect(json).to.be.an('object');
      });
  });
});
