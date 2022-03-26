
/**
 * @param {String} name - Name of the button
 * @param {Function} cmd - Command that button runs
 * @param {String} icon = Path to an icon
 */
export default (name, func, icon) => {
  this.name = name
  this.icon = icon
  this.cmd = func
}