import { helper } from '@ember/component/helper';
import { dateToString } from 'coocloudshlack/utils/date';

export default helper(function formatTimestamp(params/*, hash*/) {
  const [dateIsh] = params;
  return dateToString(dateIsh);
});
