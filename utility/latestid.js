const latestId = (obj) => {
      return obj.length > 0 ? obj[obj.length - 1 ].id + 1 : 1 
} 

module.exports = latestId