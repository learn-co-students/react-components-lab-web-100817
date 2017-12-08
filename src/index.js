// // Make sure to import React and ReactDOM
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const BUTCHER_PRODUCTS = [
//   'Tenderloin',
//   'Short ribs',
//   'Beef shin',
//   'Ribeye'
// ];
//
// // Define these exported classes
// export class OlderCoaster extends React.Component {
//   render () {
//     return React.createElement('div', {className: 'oldercoaster'}, [
//      React.createElement('p', {}, 'Two grannies having the time of their life!'),
//      React.createElement('p', {}, 'Passengers:'),
//      React.createElement('ul', {}, [
//        React.createElement('li', {}, 'Agnes'),
//        React.createElement('li', {}, 'Muriel')
//       ])
//     ]);
//   }
// }
//
// export class InFrontOfYou extends React.Component {
//   react () {
//     return React.createElement('div', {}, [
//        React.createElement('p', {}, `You shouldn't look too far.`),
//        React.createElement('p', {}, `Sometimes, the solution is right in front of you.`)
//     ]);
//   }
// }
//
// export class ButcherShop extends React.Component {
//   render () {
//     return React.createElement('div', {className: 'butcher-shop'}, [
//      React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
//      React.createElement('ul', {}, [
//       BUTCHER_PRODUCTS.map(product => React.createElement('li', {}, product))
//       ])
//     ]);
//   }
// }
//
// ReactDOM.render(
//   React.createElement('div', {}, [
//     React.createElement(OlderCoaster),
//     React.createElement(InFrontOfYou),
//     React.createElement(ButcherShop)
//   ]),
//   document.getElementById('root')
// );

Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @flored27
 Sign out
 Watch 0
  Star 0  Fork 2 flored27/react-components-lab-web-100817
forked from learn-co-students/react-components-lab-web-100817
 Code  Pull requests 0  Projects 0  Insights  Settings
Branch: solution Find file Copy pathreact-components-lab-web-100817/src/index.js
1194916  on Jun 2
@Lukeghenco Lukeghenco Add solution
1 contributor
RawBlameHistory
51 lines (46 sloc)  1.4 KB
import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

export class OlderCoaster extends React.Component {
  render() {
    return React.createElement('div', { className: 'oldercoaster' }, [
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('p', {}, 'Passengers:'),
      React.createElement('ul', {}, [
        React.createElement('li', {}, 'Agnes'),
        React.createElement('li', {}, 'Muriel')
      ])
    ]);
  }
}

export class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('p', {}, `You shouldn't look too far.`),
      React.createElement('p', {}, 'Sometimes, the solution is right in front of you.')
    ]);
  }
}

export class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', { className: 'butcher-shop' }, [
      React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
      React.createElement('ul', {},
        BUTCHER_PRODUCTS.map(product => React.createElement('li', {}, product))
      )
    ]);
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
