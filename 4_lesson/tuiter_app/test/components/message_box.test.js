
import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';

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

})