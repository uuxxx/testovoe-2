import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

function IntlMessage(props) {
  return <FormattedMessage {...props} />;
}
export default injectIntl(IntlMessage, {
  withRef: false,
});
