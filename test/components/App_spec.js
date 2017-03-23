import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Wrapper from 'Wrapper';
import App from 'components/App';

const W = Wrapper(App, {});
const C = TestUtils.renderIntoDocument(<W />);
const div = TestUtils.findRenderedDOMComponentWithTag(C, 'div');

describe('App spec', () => {
    it('Should be renderer', () => {
        expect(div).to.exist;
    });
});
