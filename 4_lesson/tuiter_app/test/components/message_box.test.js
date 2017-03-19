
import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import MessageBox from '../../src/components/message_box';
import { expect, renderContainer } from '../test_base';

describe('MessageBox', () => {

    it('should render textarea component', () => {
        const wrapper = shallow(<MessageBox />);
        expect(wrapper.find('textarea')).to.exist;
    });

    it('should render input component', () => {
        const wrapper = shallow(<MessageBox />);
        expect(wrapper.find('input')).to.exist;
    });    

    it('should render textarea component with defined name', () => {
        const wrapper = shallow(<MessageBox name="test" />);
        expect(wrapper.find('textarea').props()).to.have.property('name', 'test');
    });    

    describe('testing event inside component', () => {

        it('should execute callback passed in handleChange when trigger onChange event', () => {
            let callback = sinon.spy();
            const component = shallow(<MessageBox handleChange={callback}/>);
            const textarea = component.find('textarea');

            textarea.simulate('change', { target: { value: 'new comment' }});

            expect(callback.called).to.be.true
        });   

        it('should execute callback passed in handleClick when trigger onClick event', () => {
            let callback = sinon.spy();
            const component = shallow(<MessageBox handleClick={callback}/>);
            const input = component.find('input');

            input.simulate('click');

            expect(callback.called).to.be.true
        });   

    });

})