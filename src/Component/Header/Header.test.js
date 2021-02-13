import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

import {findByTestAttr} from '../../../Utils/index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });
    it("it should contains Header class",()=>{
        const wraper = findByTestAttr(component,'headerComponent');
        expect(wraper.length).toBe(1);
    })

    it("it should Contains logoIMG",()=>{
        const wraper = findByTestAttr(component,'logoIMG');
        expect(wraper.length).toBe(1);
    })
})

