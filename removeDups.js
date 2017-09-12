function removeDups(agentList) {
var OutPutList = [];
agentList.forEach( function(item) {
  var isDuplicate = false;
  for (var i = 0; i < OutPutList.length; i++ ) {
    if (item.start_time == OutPutList[i].start_time and item.end_time == OutPutList[i].end_time and item.name == OutPutList[i].name) {
      isDuplicate = true; 
    }
    if (isDuplicate == false) {
      OutPutList.push(item);
    }
  }
});
return OutPutList
}
