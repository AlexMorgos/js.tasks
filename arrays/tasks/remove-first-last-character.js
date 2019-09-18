function remove_first_character(element) {
    return element.substr(1,element.length)
  }
  
  function remove_last_character(element) {
    return element.substr(0,element.length - 1)
  }
  console.log(remove_last_character('AlexKornienko'));
  console.log(remove_first_character('AlexKornienko'));

  