# Mini-Project

In this activity, you will refactor an application that uses the Context API so that it handles state using the open source JavaScript library Redux.

## Setup

Copy the `src` directory from the `Develop` folder into `00-practice-app` before you begin.

## Instructions

* Begin by installing the `redux` and `react-redux` libraries with `npm`.
  ```
    https://www.npmjs.com/package/redux = npm install --save redux
    https://www.npmjs.com/package/react-redux = npm install react-redux
    npm install @reduxjs/toolkit
  ````

* Create a `store.js` file in the `utils` directory. This file should do the following:
  ```
    https://redux.js.org/tutorials/fundamentals/part-4-store
  ```

  * Import `{ createStore }` from `redux`.
    ```
      import { createStore } from 'redux'
    ```

  * Import `reducers` from `./reducers`.
    ```
      import reducer from '../utils/reducers';
    ```
  * Create a default export of `createStore` that accepts an argument of `reducers`.
      ```
        let preloadedState;
        const cars = [
          {
            id: 1,
            make: 'test1',
            model: 'Civic',
            year: '2008',
            isRunning: false,
          },
          {
            id: 2,
            make: 'test2',
            model: 'Y',
            year: '2021',
            isRunning: false,
          },
        ];

        if (cars) {
          preloadedState = {
            cars: cars
          }
        }

        export const store = createStore(reducer, preloadedState);

        export default store;

      ```

* Open `/utils/CarContext.js` and import `{ Provider }` from `react-redux` and `store` from `./store`.
  ```
    import { Provider } from 'react-redux';
    import store from './store';
  ```
  
* Refactor the `CarProvider` component so that it returns `<Provider>` with an attribute of `store`, set to the value of `store`.
  ```
    export default function CarProvider(props) {
      // const cars = [
      //   {
      //     id: 1,
      //     make: 'Honda',
      //     model: 'Civic',
      //     year: '2008',
      //     isRunning: false,
      //   },
      //   {
      //     id: 2,
      //     make: 'Tesla',
      //     model: 'Y',
      //     year: '2021',
      //     isRunning: false,
      //   },
      // ];

      // The provider component will wrap all other components inside of it that need access to our global state
      // return <CarContext.Provider value={{ cars }} {...props} />;

      return (
        <Provider store={store}>
          {/* <CarComponent /> */}
        </Provider>
      )
    }
  ```

* Clean up any unused code left over from the React Hooks.

* Run the application, using `npm run start`, to ensure that functionality is unchanged for the end user.

---

## 💡 Hints

How can we use the [Redux Fundamentals guide](https://redux.js.org/tutorials/fundamentals/part-1-overview) to find examples of implementation?

What needs to be changed, if anything, inside the `reducers.js` file?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Instead of using `React.createContext`, how can we use `Redux.createStore` and the existing `reducer` to generate the initial state and to calculate any future updates?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
