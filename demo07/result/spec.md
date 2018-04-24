{ FetchStream: 
   { [Function: FetchStream]
     super_: 
      { [Function: Readable]
        ReadableState: [Function: ReadableState],
        super_: [Object],
        _fromList: [Function: fromList] } },
  CookieJar: [Function: CookieJar],
  fetchUrl: [Function: fetchUrl] }
# TOC
   - [#异步测试](#)
<a name=""></a>
 
<a name=""></a>
# #异步测试
异步测试用例：timeout.

```js
setTimeout(function () {
  (0, _chai.expect)((0, _add.add)(1, 2)).to.be.equal(3);
  // 通知 mocha 测试结束
  done();
}, 50);
```

异步测试用例：request.

```js
request.get('https://api.github.com').on('response', function (res) {
  (0, _chai.expect)(res).to.be.an('object');
  done();
});
```

异步测试用例：返回 promise.

```js
console.log(fetch);
```

