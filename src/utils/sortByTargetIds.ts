export const sortByTargetIds = (arr, targetIds) => {
  const sortedArray = [];
  const remainingArray = [];

  arr.forEach(obj => {
    if (targetIds.includes(parseInt(obj.Id))) {
      sortedArray.push(obj);
    } else {
      remainingArray.push(obj);
    }
  });

  return sortedArray.concat(remainingArray);
}