function func() {
  eth.sendTransaction({from:eth.accounts[0],to:eth.accounts[0],value:1})
}
setInterval(func, 5000)
