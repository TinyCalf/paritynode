# chains/
chains文件里是各种链的配置文件
包含所有选项的完整配置文件可以看这里 https://github.com/paritytech/parity/blob/master/parity/cli/tests/config.full.toml
如果我生产了一条私有链，想要连接也只是在这里加几个配置文件而已
目前有dev、main、ropsten。 dev用于本地测试。ropsten是一个公共的测试网络，可以在区块链浏览器 https://ropsten.etherscan.io/ 上查看交易，可以从水龙头 http://faucet.ropsten.be:3001/ 获取这个链上的以太坊。

# 启动
在系统已经全局安装最新版parity的情况下直接使用start脚本启动parity
```
./start [配置文件文件名，不包含扩展名]
./start dev 启动测试网络
./start ropsten 启动ropsten网络
```
区块文件也会在这个文件夹下生成，服务器上可以使用nohup或者screen管理这个进程。在本地启动的时候会自动启动parity的web版管理界面。也可以使用geth的attach命令管理parity钱包

# 命令行控制界面
使用 `./attach dev`可以启动geth的web3交互界面，可以直接连接到parity上，语法和web3几乎相同。如果你修改了端口记得在attach脚本里面也改一下
