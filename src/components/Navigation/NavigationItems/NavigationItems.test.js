import React from "react";

// Enzyme allows to render just one component stand-alone, independent of the entire react app.
// Enzyme allows to create an instance of a single component, so we can run isolated tests later
// Shallow is the most popular helper method or the best way of rendering react components in many circumstances
// Shallow renders the component with all its content, but the content isn't deeply rendered
import {configure, shallow} from 'enzyme';
// It allows to connect Enzyme to React v16.x
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

// Connecting Enzyme to React v16.x
configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    // Rendering the necessary <NavigationItems /> components
    let wrapper;
    // let wrapperAuthenticated;

    beforeEach(() => {
        // An unauthenticated user:
        wrapper = shallow(<NavigationItems/>);
        // An authenticated user:
        // wrapperAuthenticated = shallow(<NavigationItems isAuthenticated/>);
    });

    it('should render one <ul /> element always', () => {
        expect(wrapper.find('ul')).toHaveLength(1);
    });

    it('should render two <NavigationItem /> components if the user is not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItem /> components if the user is authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should render a Burger Builder <NavigationItem /> if the user is not authenticated', () => {
        expect(wrapper.contains(<NavigationItem href={"/"} exact={true}>Burger Builder</NavigationItem>)).toEqual(true);
    });

    it('should render a Burger Builder <NavigationItem /> if the user is authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem href={"/"} exact={true}>Burger Builder</NavigationItem>)).toEqual(true);
    });

    it('should not render a Orders <NavigationItem /> if the user is not authenticated', () => {
        expect(wrapper.contains(<NavigationItem href={"/orders"}>Orders</NavigationItem>)).toEqual(false);
    });

    it('should render a Orders <NavigationItem /> if the user is authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem href={"/orders"}>Orders</NavigationItem>)).toEqual(true);
    });

    it('should not render a Logout <NavigationItem /> if the user is not authenticated', () => {
        expect(wrapper.contains(<NavigationItem href={"/logout"}>Logout</NavigationItem>)).toEqual(false);
    });

    it('should render a Logout <NavigationItem /> if the user is authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem href={"/logout"}>Logout</NavigationItem>)).toEqual(true);
    });

    it('should not render a Authenticate <NavigationItem /> if the user is authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem href={"/auth"}>Authenticate</NavigationItem>)).toEqual(false);
    });

    it('should render a Authenticate <NavigationItem /> if the user is not authenticated', () => {
        expect(wrapper.contains(<NavigationItem href={"/auth"}>Authenticate</NavigationItem>)).toEqual(true);
    });
});