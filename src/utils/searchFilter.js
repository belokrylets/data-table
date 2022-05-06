const searchFilter = (posts, searchValue) => {
  return [...posts].filter(
    ({ title, body }) =>
      title.includes(searchValue) || body.includes(searchValue)
  );
};

export default searchFilter;
