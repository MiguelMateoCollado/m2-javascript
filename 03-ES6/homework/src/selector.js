var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl)
  }
  for (let i = 0; i < startEl.children.length; i++) {
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, startEl.children.item(i)))
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  if (selector[0] === '#') {
    return 'id'
  }else if (selector[0] === '.') {
    return 'class'
  }else if(selector.includes('.') === true){
    return 'tag.class'
  }else{
    return 'tag'
  }
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
  matchFunction = element => element.id == selector.slice(1)
  } else if (selectorType === "class") {
  matchFunction = element => element.classList.contains(selector.slice(1))
  } else if (selectorType === "tag.class") {
  matchFunction = element => {
  let tagAndClass = selector.split('.');
  console.log(tagAndClass);
  if (element.tagName === tagAndClass[0].toUpperCase() && element.classList.contains(tagAndClass[1])) {
    return true
  }
  return false
  }
  } else if (selectorType === "tag") {
    matchFunction = (element) => element.tagName === selector.toUpperCase() 
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
