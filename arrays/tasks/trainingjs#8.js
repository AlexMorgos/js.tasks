function howManyDays(monthIndex) {
   const months = [
      {
         indexes: [4, 6, 9, 12],
         days: 30,
      },
      {
         indexes: [2],
         days: 28,
      },
      {
         indexes: [1, 3, 5, 7, 8, 10, 11],
         days: 31,
      }
   ];
   const month = months.find((monthDescription) => monthDescription.indexes.includes(monthIndex))
   return month.days;
}