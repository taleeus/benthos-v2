
export function not(predicate: Function) {
  return function () {
    return !predicate.apply(this, arguments);
  };
}
