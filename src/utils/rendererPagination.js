const rendererPagination = (totalPages) => {
  const result = [];
  for (let i = 1; i <= totalPages; i += 1) {
    result.push(i);
  }
  return result;
};

export default rendererPagination;
