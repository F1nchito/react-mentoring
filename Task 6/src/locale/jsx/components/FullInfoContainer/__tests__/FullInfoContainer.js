import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FullInfoContainer from '../FullInfoContainer';

configure({adapter: new Adapter()});
function setup() {
    const props = {
        searchQuery: 'avatar',
        content : {test: test}
    };
    const enzymeWrapper = shallow(<FullInfoContainer {...props}/>);
    return {props,enzymeWrapper};
}
describe('components', () => {
    describe('FullInfoContainer', () => {
        it('should render FullInfoContainer and subcomponents', () => {
            const {enzymeWrapper} = setup();
            const HeaderProps = enzymeWrapper.find('Header').props();
            expect(HeaderProps.searchQuery).toEqual('avatar');
            const FullDescriptionProps = enzymeWrapper.find('FullDescription').props();
            expect(FullDescriptionProps.content).toEqual({test:test});
        })
    })
})