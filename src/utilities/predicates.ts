
export function not(predicate: Function) {
  return function (this: Function) {
    return !predicate.apply(this, arguments);
  };
}
