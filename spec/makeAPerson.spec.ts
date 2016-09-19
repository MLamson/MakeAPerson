import {Person} from "../src/makeAPerson";


describe('Make a Person', () => {
    it('take as input a first and last name expect to return first name', () => {
        let bob: Person = new Person("Bob Ross");
        expect(bob.getFirstName()).toEqual("Bob");
    });
    it('take as input a first and last name expect to return last name', () => {
        let bob: Person = new Person("Bob Ross");
        expect(bob.getLastName()).toEqual("Ross");
    });
    it('take as input a first and last name expect to return first and last name', () => {
        let bob: Person = new Person("Bob Ross");
        expect(bob.getFullName()).toEqual("Bob Ross");
    });
    it('set Bob Ross as first and last name then set first name to Haskell and return first and last name of Haskell Ross', () => {
        let bob: Person = new Person("Bob Ross");
        bob.setFirstName("Haskell");
        expect(bob.getFullName()).toEqual("Haskell Ross");
    });
    it('set Bob Ross as first and last name then set first name to Haskell and last name to Curry return first and last name of Haskell Curry', () => {
        let bob: Person = new Person("Bob Ross");
        bob.setFirstName("Haskell");
        bob.setLastName("Curry");
        expect(bob.getFullName()).toEqual("Haskell Curry");
    });
    it('set Bob Ross as first and last name then set first name to Haskell and last name to Curry return first and last name of Haskell Curry', () => {
        let bob: Person = new Person("Bob Ross");
        bob.setFullName("Haskell Curry");
        expect(bob.getFullName()).toEqual("Haskell Curry");
    });
    it('set Bob Ross as first and last name then set first name to Haskell and last name to Curry return first name of Haskell', () => {
        let bob: Person = new Person("Bob Ross");
        bob.setFullName("Haskell Curry");
        expect(bob.getFirstName()).toEqual("Haskell");
    });
    it('set Bob Ross as first and last name then set first name to Haskell and last name to Curry return last name of Curry', () => {
        let bob: Person = new Person("Bob Ross");
        bob.setFullName("Haskell Curry");
        expect(bob.getLastName()).toEqual("Curry");
    });
    it('check the length of keys and return 6', () => {
        let bob: Person = new Person("Bob Ross");
        expect(Object.keys(Object.getPrototypeOf(bob)).length).toEqual(6);
    });
});