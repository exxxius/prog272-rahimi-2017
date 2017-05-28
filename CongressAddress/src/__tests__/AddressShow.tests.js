/**
 * Created by bcuser on 4/26/17.
 */
import React from 'react';
import {mount} from 'enzyme';
import ElfEnzymeDebug from '../ElfDebugEnzyme.js';
import DataMaven from '../components/DataMaven';
const ElfDebug = new ElfEnzymeDebug(true, 'AddressShow.test.js');
jest.mock('whatwg-fetch');
import {MemoryRouter} from 'react-router';

describe('AddressShow Mount Suite', function() {

    let quiet = true;
    beforeEach(function() {
        const localStorageMock = (function() {
            let storage = {};
            return {
                getItem: function(key) {
                    return storage[key];
                },
                setItem: function(key, value) {
                    storage[key] = value.toString();
                },
                clear: function() {
                    storage = {};
                }
            };
        })();
        Object.defineProperty(global, 'localStorage', {value: localStorageMock});
    });

    const getLast = (wrapper) => {
        if (!quiet) {
            const ninep = wrapper.find('p').last().debug();
            console.log(ninep);
        }
        ;
    };
    // additional tests for all the address fields
    //==================================

    it('renders and displays the default first name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>);
        const firstName = <p className='App-intro'>firstName: Lamars</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 0, true);
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });
    it('renders button click message first Name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>);
        const firstName = <p className='App-intro'>firstName: Roger</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 0, true);
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });
    it('renders button click message First Button firstName', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>);
        const firstName = <p className='App-intro'>firstName: Lamar</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 0, true);
        wrapper.find('button#firstAddress').simulate('click');
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });
    it('renders button click message Last Button firstName', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>);
        const firstName = <p className='App-intro'>firstName: Timothy</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 0, true);
        wrapper.find('button#lastAddress').simulate('click');
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });
    it('renders and displays the clicked Next first name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const firstName = <p className='App-intro'>firstName: Roger</p>;
        wrapper.find('button#getAddress').simulate('click');
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 0, false);
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });
    it('renders and displays the clicked Previus first name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const firstName = <p className='App-intro'>firstName: Lamar</p>;
        wrapper.find('button#getAddress').simulate('click');
        wrapper.find('button#previousAddress').simulate('click');
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 0, false);
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });

    it('renders and displays the default last name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>);
        const lastName = <p className='App-intro'>lastName: Alexander</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 1, true);
        expect(wrapper.containsMatchingElement(lastName)).toEqual(true);
    });
    it('renders and displays the clicked FIRST last name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const lastName = <p className='App-intro'>lastName: Alexander</p>;
        wrapper.find('button#firstAddress').simulate('click');
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 1, false);
        expect(wrapper.containsMatchingElement(lastName)).toEqual(true);
    });
    it('renders and displays the clicked LAST last name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const lastName = <p className='App-intro'>lastName: Kaine</p>;
        wrapper.find('button#lastAddress').simulate('click');
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 1, false);
        expect(wrapper.containsMatchingElement(lastName)).toEqual(true);
    });
    it('renders and displays the clicked Next last name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const lastName = <p className='App-intro'>lastName: Wicker</p>;
        wrapper.find('button#getAddress').simulate('click');
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 1, false);
        expect(wrapper.containsMatchingElement(lastName)).toEqual(true);
    });
    it('renders and displays the clicked Previus last name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const lastName = <p className='App-intro'>lastName: Alexander</p>;
        wrapper.find('button#getAddress').simulate('click');
        wrapper.find('button#previousAddress').simulate('click');

        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 0, false);
        expect(wrapper.containsMatchingElement(lastName)).toEqual(true);
    });;

    it('renders and displays the default Street', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Street = <p className='App-intro'>Street: 455 Dirksen Senate Office Building</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 6, true);
        expect(wrapper.containsMatchingElement(Street)).toEqual(true);
    });
    it('renders and displays the clicked FIRST Button Street', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Street = <p className='App-intro'>Street: 455 Dirksen Senate Office Building</p>;
        wrapper.find('button#firstAddress').simulate('click');
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 6, true);
        expect(wrapper.containsMatchingElement(Street)).toEqual(true);
    });
    it('renders and displays the clicked LAST Button Street', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Street = <p className='App-intro'>Street: 231 Russell Senate Office Building</p>;
        wrapper.find('button#lastAddress').simulate('click');
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 6, false);
        expect(wrapper.containsMatchingElement(Street)).toEqual(true);
    });
    it('renders and displays the clicked Next Button Street', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Street = <p className='App-intro'>Street: 555 Dirksen Senate Office Building</p>;
        wrapper.find('button#getAddress').simulate('click');
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 6, false);
        expect(wrapper.containsMatchingElement(Street)).toEqual(true);
    });
    it('renders and displays the clicked Previous Button Street', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Street = <p className='App-intro'>Street: 455 Dirksen Senate Office Building</p>;
        wrapper.find('button#getAddress').simulate('click');
        wrapper.find('button#previousAddress').simulate('click');
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 6, true);
        expect(wrapper.containsMatchingElement(Street)).toEqual(true);
    });

    it('renders and displays the default City', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const City = <p className='App-intro'>City: Washington DC</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 8, false);
        expect(wrapper.containsMatchingElement(City)).toEqual(true);
    });
    it('renders and displays the clicked FIRST Button City', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const City = <p className='App-intro'>City: Washington DC</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 8, false);
        wrapper.find('button#firstAddress').simulate('click');
        expect(wrapper.containsMatchingElement(City)).toEqual(true);
    });
    it('renders and displays the clicked LAST Button City', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const City = <p className='App-intro'>City: Washington DC</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 8, false);
        wrapper.find('button#lastAddress').simulate('click');
        expect(wrapper.containsMatchingElement(City)).toEqual(true);
    });
    it('renders and displays the clicked next City', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const City = <p className='App-intro'>City: Washington DC</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 8, false);
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.containsMatchingElement(City)).toEqual(true);
    });
    it('renders and displays the clicked prev City', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const City = <p className='App-intro'>City: Washington DC</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 8, false);
        wrapper.find('button#getAddress').simulate('click');
        wrapper.find('button#previousAddress').simulate('click');
        expect(wrapper.containsMatchingElement(City)).toEqual(true);
    });

    it('renders and displays the default State', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const State = <p className='App-intro'>State: TN</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 11, false);
        expect(wrapper.containsMatchingElement(State)).toEqual(true);
    });
    it('renders and displays the clicked FIRST Button State', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const State = <p className='App-intro'>State: TN</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 11, false);
        wrapper.find('button#firstAddress').simulate('click');
        expect(wrapper.containsMatchingElement(State)).toEqual(true);
    });
    it('renders and displays the clicked LAST Button State', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const State = <p className='App-intro'>State: VA</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 11, false);
        wrapper.find('button#lastAddress').simulate('click');
        expect(wrapper.containsMatchingElement(State)).toEqual(true);
    });
    it('renders and displays the clicked next State', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const State = <p className='App-intro'>State: MS</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 11, false);
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.containsMatchingElement(State)).toEqual(true);
    });
    it('renders and displays the clicked prev State', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const State = <p className='App-intro'>State: TN</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 11, false);
        wrapper.find('button#getAddress').simulate('click');
        wrapper.find('button#previousAddress').simulate('click');
        expect(wrapper.containsMatchingElement(State)).toEqual(true);
    });

    it('renders and displays the default Zip Code', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Zip = <p className='App-intro'>Zip: 20510</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 13, false);
        expect(wrapper.containsMatchingElement(Zip)).toEqual(true);
    });
    it('renders and displays the clicked FIRST Button Zip Code', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Zip = <p className='App-intro'>Zip: 20510</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 13, false);
        wrapper.find('button#firstAddress').simulate('click');
        expect(wrapper.containsMatchingElement(Zip)).toEqual(true);
    });
    it('renders and displays the clicked LAST Button Zip Code', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Zip = <p className='App-intro'>Zip: 20510</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 13, false);
        wrapper.find('button#lastAddress').simulate('click');
        expect(wrapper.containsMatchingElement(Zip)).toEqual(true);
    });
    it('renders and displays the clicked next Zip Code', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Zip = <p className='App-intro'>Zip: 20510</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 13, false);
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.containsMatchingElement(Zip)).toEqual(true);
    });
    it('renders and displays the clicked prev Zip Code', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Zip = <p className='App-intro'>Zip: 20510</p>;
        //ElfDebug.getIndex(wrapper, 'div#addressShowRender', 13, false);
        wrapper.find('button#getAddress').simulate('click');
        wrapper.find('button#previousAddress').simulate('click');
        expect(wrapper.containsMatchingElement(Zip)).toEqual(true);
    });

});
