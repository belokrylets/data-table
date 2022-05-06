const sort = (posts, option, mode) => {
  if (mode[option] === true) {
    return [...posts].sort((a, b) => {
      if (a[option] > b[option]) {
        return 1;
      }
      if (a[option] < b[option]) {
        return -1;
      }
      return 0;
    });
  }

  return [...posts].sort((b, a) => {
    if (a[option] > b[option]) {
      return 1;
    }
    if (a[option] < b[option]) {
      return -1;
    }
    return 0;
  });
};

export default sort;
