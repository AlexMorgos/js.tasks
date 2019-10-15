function daysRepresented(trips) {
    const days = Array(365).fill(0);
    for ([a, b] of trips)
      for (let i = a - 1; i < b; i++)
        days[i] = 1;
    return days.reduce((a, b) => a + b);
  }