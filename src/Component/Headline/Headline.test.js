import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
import {findByTestAttr,checkProps} from '../../../Utils/index';
//import checkPropTypes from 'check-prop-types';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};


describe('Headline Component', () => {
    describe('Headline Component prop types', () => {
        it("should not through warning",()=>{
            const expectedProps={
                header:"Ravi Kirana",
                desc:"post description",
                tempArr:[{
                    fname:"",
                    lname:"",
                    onlineStatus:true,
                    age:20,
                    email:"ravi@gmail.com"
                }]
            }

            const propsError=checkProps(Headline,expectedProps);
            expect(propsError).toBeUndefined();
        })
    })
    describe('Headline Component have props', () => {
        let component;
        beforeEach(() => {
            const props={
                header:'New Header',
                desc:"click here to see header"
            }
            component = setUp(props); 
        });
        it("it should contains Header class",()=>{
            const wraper = findByTestAttr(component,'headlineComponent');
            expect(wraper.length).toBe(1);
        })

        it("it should Contains Headline",()=>{
            const wraper = findByTestAttr(component,'header');
            expect(wraper.length).toBe(1);
        })

        it("it should Contains description",()=>{
            const wraper = findByTestAttr(component,'desc');
            expect(wraper.length).toBe(1);
        })
        
    })
    describe('Headline Component no props', () => {
        let component;
        beforeEach(() => {
            component = setUp(); 
        });
        it("it should not contains Header class",()=>{
            const wraper = findByTestAttr(component,'headlineComponent');
            expect(wraper.length).toBe(0);
        })

        it("it should not Contains Headline",()=>{
            const wraper = findByTestAttr(component,'header');
            expect(wraper.length).toBe(0);
        })

        it("it should not Contains description",()=>{
            const wraper = findByTestAttr(component,'desc');
            expect(wraper.length).toBe(0);
        })
    })
    
})


