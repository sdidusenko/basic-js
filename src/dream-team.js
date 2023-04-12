const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let a = members.filter(Boolean).filter(item => typeof item === "string").join().toString().toUpperCase().replace(/ /g, "").split(",").sort()
    let name = ''
    for (let i = 0; i < a.length; i++) {
      name += a[i][0]
    } return name
  } return false
}


module.exports = {
  createDreamTeam
};
