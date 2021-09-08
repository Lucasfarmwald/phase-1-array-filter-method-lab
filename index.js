  //const res = names.find(findMatching)
function findMatching(drivers, name){
     return drivers.filter(function(word){
          return name.toLowerCase() === word.toLowerCase()
      })
}


function fuzzyMatch(driver,item){
    return driver.filter(function(words){
      return item.charAt(0) === words.charAt(0)
    })
}


function matchName(driver1, item1) {
  return driver1.filter(function(word1){
      return item1 === word1.name
  })
}