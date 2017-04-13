import _ from 'lodash';

export default (num, f) => {
  if (typeof f === 'object') {
    _.chain(f)
    .flattenDeep()
    .map(fn => num = fn(num))
    .value();
  } else {
    num = f(num);
  }
  return num;
}
