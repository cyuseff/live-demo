import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Comp001 from 'components/Comp001';

const start = 0;
const addLabel = 'Add';
const Component = TestUtils.renderIntoDocument(<Comp001 start={start} addLabel={addLabel} />);
const div = TestUtils.findRenderedDOMComponentWithTag(Component, 'div');

/*
    "div" is a fully rendered React component inside JSDom,
    so we can test it just using plain javascript
*/

let addBtn;
let resetBtn;
let span;

describe('Comp001 spec', () => {
    it('Should render', () => {
        expect(div).to.exist;
    });

    it('Check initial state', () => {
        expect(Component.state).to.have.property('count', start);
    });

    it('Should have a add button', () => {
        addBtn = div.querySelector('button.btn.btn-default');
        expect(addBtn).to.exist;
    });

    it('Add button should render the addLabel', () => {
        expect(addBtn.innerHTML).to.contain(addLabel);
    });

    it('Should have a reset button', () => {
        resetBtn = div.querySelector('button.btn.btn-danger');
        expect(resetBtn).to.exist;
    });

    it('Should have a <span> tag with the count', () => {
        span = div.querySelector('p span.count-span');
        expect(span).to.exist;
        expect(span.innerHTML).to.be.equal('0');
    });

    describe('When "add" button is cliked, count should rise', () => {
        it('Count should be 1', done => {
            TestUtils.Simulate.click(addBtn);
            // give react time to update the DOM
            setTimeout(() => {
                expect(span.innerHTML).to.be.equal('1');
                done();
            }, 10);
        });

        it('Count should be 2', done => {
            TestUtils.Simulate.click(addBtn);
            // give react time to update the DOM
            setTimeout(() => {
                expect(span.innerHTML).to.be.equal('2');
                done();
            }, 10);
        });

        it('Count should be 4', done => {
            TestUtils.Simulate.click(addBtn);
            TestUtils.Simulate.click(addBtn);
            // give react time to update the DOM
            setTimeout(() => {
                expect(span.innerHTML).to.be.equal('4');
                done();
            }, 10);
        });
    });

    describe('When "reset" button is cliked, count should be reset', () => {
        it('Count should be 0', done => {
            TestUtils.Simulate.click(resetBtn);
            // give react time to update the DOM
            setTimeout(() => {
                expect(span.innerHTML).to.be.equal('0');
                done();
            }, 10);
        });
    });
});
