var expect = chai.expect;

describe('#浏览器测试', function(){
  it('浏览器测试用例：同步', function(){
    expect(add(1, 2)).to.be.equal(3);
  });

  it('浏览器测试用例：同步', function(){
    expect(add(1, 3)).to.be.equal(3);
  });

  it('浏览器测试用例：异步', function(done){
    setTimeout(()=>{
      expect(add(1, 2)).to.be.equal(3);
      done();
    }, 100);
  });
});