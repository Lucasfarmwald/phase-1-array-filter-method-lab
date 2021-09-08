  //const res = names.find(findMatching)
function findMatching(drivers, name){
     return drivers.filter(function(word){
          return name.toLowerCase() === word.toLowerCase()
      })
}


function fuzzyMatch(driver,item){
    return driver.filter(function(words){
      return item.length === words.length
    })
}