import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

configure({adapter: new Adapter()});
function setup() {
    const props = {
        searchQuery: 'avatar'
    };
    const enzymeWrapper = shallow(<Header {...props}/>);
    return {props,enzymeWrapper};
}
describe('components', () => {
    describe('Header', () => {
        it('should render Header and subcomponents', () => {
            const {enzymeWrapper} = setup();
            expect(enzymeWrapper.find('span').text()).toBe('netflixroulette');
            const LinkProps = enzymeWrapper.find('Link').props();
            expect(LinkProps.to).toEqual(`/search/avatar`);
            const ButtonProps = enzymeWrapper.find('Link').find('Button').props();
            expect(ButtonProps.style).toEqual('middle');
            expect(ButtonProps.content).toEqual('search');
        })
    })
})