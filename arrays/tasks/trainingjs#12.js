function giveMeFive(obj) {
  var five = [];
  for (var key in obj) {
    const item = key.length || obj[key].length;
    if (item.length == 5) five.push(key);
  }
  return five;
}