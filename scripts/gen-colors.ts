// 导入Node.js的文件系统模块，用于文件操作
import fs from 'node:fs'
// 导入Node.js的URL模块，用于将文件URL转换为文件路径
import { fileURLToPath } from 'node:url'
// 导入Node.js的路径模块，用于处理文件路径
import path from 'node:path'
// 导入颜色工具库，用于获取颜色变量
import { gold, green, purple, red } from '@ant-design/colors'

// 初始化一个空字符串，用于拼接CSS变量定义
let colors = ''
// 遍历紫色系颜色，拼接成CSS变量定义
purple.forEach((color, index) => {
  colors += `--tov-color-primary-${index + 1}: ${color};\n`
})

// 添加一个换行符，用于区分不同色系的CSS变量定义
colors += '\n'
// 遍历绿色系颜色，拼接成CSS变量定义
green.forEach((color, index) => {
  colors += `--tov-color-success-${index + 1}: ${color};\n`
})

// 添加一个换行符，用于区分不同色系的CSS变量定义
colors += '\n'
// 遍历金色系颜色，拼接成CSS变量定义
gold.forEach((color, index) => {
  colors += `--tov-color-warning-${index + 1}: ${color};\n`
})

// 添加一个换行符，用于区分不同色系的CSS变量定义
colors += '\n'
// 遍历红色系颜色，拼接成CSS变量定义
red.forEach((color, index) => {
  colors += `--tov-color-error-${index + 1}: ${color};\n`
})

// 使用fileURLToPath将当前文件的URL转换为文件路径，并拼接得到基础路径
const baseUrl = fileURLToPath(new URL('../', import.meta.url))
// 根据基础路径，解析得到目标CSS文件的完整路径
const cssFile = path.resolve(baseUrl, 'packages/tov-ui/src/style/theme/colors.less')
// 将拼接好的CSS变量定义写入目标CSS文件
fs.writeFileSync(cssFile, `:root{\n${colors}\n}`)
