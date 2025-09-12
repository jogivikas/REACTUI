function helper(n) {
  let arr = new Array(n);
  for (var i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10 + 1);
  }
  return arr;
}

export { helper };
