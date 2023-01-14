var language = navigator.language || navigator.userLanguage;
var language = (language === "pl") ? "pl" : "en";

function displayDate(datetimeJson) {
  var datetime = new Date(datetimeJson);
  var datetimeString = datetime.toISOString();
  var date = datetimeString.substring(0,10);
  if(datetimeJson.length >= 16) {      
      var time = datetimeString.substring(11,16);
      return date + ' ' + time;
  }else{
      return date;
  }
}