const renderTable = (arr, page, limit) => {
  const lastPost = limit * page - 1;
  const firstPost = limit * page - limit;
  const result = [];
  arr.forEach((post, index) => {
    if (index >= firstPost && index <= lastPost) {
      result.push(post);
    }
  });
  return result;
};

export default renderTable;
