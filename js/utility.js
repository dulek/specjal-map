// Language detection and management
var defaultLanguage = navigator.language || navigator.userLanguage;
defaultLanguage = (defaultLanguage.startsWith("pl")) ? "pl" : "en";

// Get language from localStorage or use default
var language = localStorage.getItem('specjal-language') || defaultLanguage;

// Translations object
var translations = {
  pl: {
    settings: "Ustawienia",
    locations: "Lokalizacje",
    languageLabel: "Język",
    polish: "Polski",
    english: "Angielski",
    groupBy: "Grupuj według:",
    author: "Autora",
    country: "Kraju",
    city: "Miejsca",
    sortBy: "Sortuj według:",
    orderAdded: "Kolejności dodania",
    authorAZ: "Autora (A-Z)",
    authorZA: "Autora (Z-A)",
    countryAZ: "Kraju (A-Z)",
    countryZA: "Kraju (Z-A)",
    cityAZ: "Miejsca (A-Z)",
    cityZA: "Miejsca (Z-A)",
    dateOldest: "Daty (Najstarsze)",
    dateNewest: "Daty (Najnowsze)",
    collapseAll: "Zwiń wszystkie",
    expandAll: "Rozwiń wszystkie"
  },
  en: {
    settings: "Settings",
    locations: "Locations",
    languageLabel: "Language",
    polish: "Polish",
    english: "English",
    groupBy: "Group by:",
    author: "Author",
    country: "Country",
    city: "Location",
    sortBy: "Sort by:",
    orderAdded: "Order Added",
    authorAZ: "Author (A-Z)",
    authorZA: "Author (Z-A)",
    countryAZ: "Country (A-Z)",
    countryZA: "Country (Z-A)",
    cityAZ: "Location (A-Z)",
    cityZA: "Location (Z-A)",
    dateOldest: "Date (Oldest)",
    dateNewest: "Date (Newest)",
    collapseAll: "Collapse All",
    expandAll: "Expand All"
  }
};

// Get translation
function t(key) {
  return translations[language][key] || key;
}

// Set language
function setLanguage(lang) {
  language = lang;
  localStorage.setItem('specjal-language', lang);
  location.reload(); // Reload page to apply language changes
}

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

function isAnniversary(datetimeJson) {
  if (!datetimeJson) return false;

  var markerDate = new Date(datetimeJson);
  var today = new Date();

  // Check if it's the same day and month, but different year
  return markerDate.getMonth() === today.getMonth() &&
         markerDate.getDate() === today.getDate() &&
         markerDate.getFullYear() !== today.getFullYear();
}

function parseTitle(title) {
  // Parse title format: "Object - City - Country" or "Object - City - State, Country"
  // Returns: { object, city, state, country, fullLocation }

  var parts = title.split(' - ');
  var result = {
    object: '',
    city: '',
    state: '',
    country: '',
    fullLocation: title
  };

  if (parts.length === 1) {
    // No separator, treat as location
    result.city = parts[0].trim();
    result.country = parts[0].trim();
  } else if (parts.length === 2) {
    // "City - Country" or "Object - Country"
    result.object = parts[0].trim();
    var lastPart = parts[1].trim();

    if (lastPart.includes(',')) {
      var locationParts = lastPart.split(',');
      result.state = locationParts[0].trim();
      result.country = locationParts[1].trim();
      result.city = result.object; // In this case, first part might be city
    } else {
      result.city = parts[0].trim();
      result.country = lastPart;
    }
  } else if (parts.length >= 3) {
    // "Object - City - Country" or "Object - City - State, Country"
    result.object = parts[0].trim();
    result.city = parts[1].trim();
    var lastPart = parts[parts.length - 1].trim();

    if (lastPart.includes(',')) {
      var locationParts = lastPart.split(',');
      result.state = locationParts[0].trim();
      result.country = locationParts[1].trim();
    } else {
      result.country = lastPart;
    }
  }

  return result;
}