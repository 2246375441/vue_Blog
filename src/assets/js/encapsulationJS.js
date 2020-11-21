const fz = {
  /**
   * 修改全局下的css
   * @param {*} key   参数名 如--borderRadius
   * @param {*} value 参数值 如20px
   * 调用方式 this.$fz.VarCssSet('--borderRadius','20px')
   */
  VarCssSet: function (key, value) {
    // 解决思路 先获取root中的style值
    // 1 先获取style的值 root.style.cssText
    // 2 两种思路
    //   2.1  不存在--key
    //        直接在最后添加新的数值即可  字符串
    //   2.2  存在--key
    //        先统一循环找到属性位置 split(";") => 转换为数组  通过for indexOf找到属性值
    //        进行覆盖修改为最新的 
    var root = document.querySelector(':root')
    var lsText = root.style.cssText
    if (lsText.indexOf(key) !== -1) {
      var ls = root.style.cssText.split(";")
      ls.pop()
      for (let i = 0; i < ls.length; i++) {
        if (ls[i].indexOf(key) !== -1) {
          ls[i] = `${key}:${value};`
        }
      }
      root.style.cssText = ls.join(";")
    } else {
      lsText = lsText + `${key}:${value};`
      root.style.cssText = lsText
    }
  },
}
export default fz