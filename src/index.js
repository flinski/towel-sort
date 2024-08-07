module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    let sortedArray = [];

    matrix.forEach((array, i) => {
        if (i % 2 === 0) {
            sortedArray = sortedArray.concat(array);
        } else {
            sortedArray = sortedArray.concat(array.reverse());
        }
    });

    return sortedArray;
};
