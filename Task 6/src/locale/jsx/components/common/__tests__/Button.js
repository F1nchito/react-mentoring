import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

configure({adapter: new Adapter()});
function setup() {
    const props = {
        value: 'search',
        onClick : jest.fn(),
        content : 'search',
        active : false
    };
    const enzymeWrapper = shallow(<Button {...props}/>);
    return {props,enzymeWrapper};
}
describe('components', () => {
    describe('Button', () => {
        it('should render Button', () => {
            const {enzymeWrapper} = setup();
            const BtnProps = enzymeWrapper.props();
            expect(BtnProps.value).toEqual('search');
            expect(enzymeWrapper.text()).toEqual('search');
        })
    })
})