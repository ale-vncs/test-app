import { Colors, ColorsFinal } from '../typings/colors'

const themeColors = (isDark?: boolean): ColorsFinal => {
  const colors: Colors = {
    primary: ['#F09692', '#F09692'],
    secondary: ['#fff3ed', '#fff3ed'],
    warning: ['#fffb48', '#f2ed4b'],
    error: ['#f44336', '#ff6262'],
    white: ['#fff', '#fff'],
    yellow: ['#ffd800', '#ffd800'],
    paper: ['#fff', '#424242'],
    background: ['#fafafa', '#303030'],
    border: ['#e0e0e0', '#757575']
  }

  const finalColors: any = {}

  Object.entries(colors).forEach((color) => {
    finalColors[color[0]] = !isDark ? color[1][0] : color[1][1]
  })

  return finalColors
}

export default themeColors
