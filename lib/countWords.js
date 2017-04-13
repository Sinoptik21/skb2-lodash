import _ from 'lodash';

export default str => _
  .chain(str)
  .lowerCase()
  .words()
  .countBy()
  .value();
