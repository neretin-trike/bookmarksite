export default new class {
    store = {};
    setItem = (key, val) => (this.store[key] = val);
    getItem = key => this.store[key];
    removeItem = key => { delete this.store[key]; };
    clear = () => (this.store = {});
  }();


// foo.test.js
// import localStorage from './localStorage';
// window.localStorage = localStorage;
// ..

// localStorage.test.js
// import localStorage from './localStorage';

// describe('localStorage', () => {
//   beforeEach(() => localStorage.clear());

//   it('is initialized properly', () => expect(localStorage.store).toEqual({}));

//   it("returns undefined if requested item doesn't exist", () => {
//     const foo = localStorage.getItem('foo');
//     expect(foo).toBeUndefined();
//   });

//   it('sets the value of an item', () => {
//     localStorage.setItem('foo', 'bar');
//     expect(localStorage.store).toEqual({ foo: 'bar' });
//   });

//   it('gets the value of an item', () => {
//     localStorage.setItem('foo', 'bar');
//     const foo = localStorage.getItem('foo');
//     expect(foo).toBe('bar');
//   });

//   it('removes an item', () => {
//     localStorage.setItem('foo', 'bar');
//     localStorage.removeItem('foo');
//     const foo = localStorage.getItem('foo');
//     expect(foo).toBeUndefined();
//   });

//   it('clears all items', () => {
//     localStorage.setItem('foo', 'qwerty');
//     localStorage.setItem('bar', 'asdf');
//     expect(localStorage.store).toEqual({ foo: 'qwerty', bar: 'asdf' });
//     localStorage.clear();
//     expect(localStorage.store).toEqual({});
//   });
// });