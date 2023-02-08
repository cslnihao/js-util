/**
 * <span style='color:red;font-weight:bold'>字符串根据特殊字符转换成小驼峰格式</span>
 * |输入值|输出
 * |---|---|
 * |line_to_hump|lineToHump
 * @param {String} str - 需要转换的字符串
 * @param {String} symbol - 特殊符号，根据这个值做转换
 * @return {String} - 返回小驼峰格式的字符串
 */

const lineToHump = (str, symbol) => {
  symbol = symbol || '_'
  // eslint-disable-next-line
  var reg = new RegExp(symbol+'(\\w)', 'g')
  return str.replace(reg, function (all, letter) {
    return letter.toUpperCase()
  })
}

export default lineToHump