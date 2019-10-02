function fiveLines(str) {
   var res = '';
   for (var i = 1; i <= 5; i++) {
      res = `${res}${str.trim().repeat(i)}\n`
   }
   return res;
}