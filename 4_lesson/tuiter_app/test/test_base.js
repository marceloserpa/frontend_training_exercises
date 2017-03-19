

import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import jsdom from 'jsdom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers'


chai.use(chaiEnzyme());

const expect = chai.expect;

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

function renderContainer(ComponentClass, props, state){
    const componentInstance = mount(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props} />
        </Provider>
    );
    return componentInstance;
}

function renderComponent(ComponentClass){
    return shallow(<ComponentClass />);
}

export { expect, renderComponent, renderContainer }