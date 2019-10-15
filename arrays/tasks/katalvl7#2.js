const catchSignChange = arr => {
    var changes = 0;
    for (var n = 1; n < arr.length; n++)
      changes += arr[n] < 0 != arr[n - 1] < 0;
    return changes;
  };