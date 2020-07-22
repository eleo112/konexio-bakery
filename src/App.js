import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import Button from './components/core/Button';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: "add",
      items: [],
    };

  }

  render() {
    return (
      <div>
        <div>
          <Add />
        </div>
        <div>List</div>
        <div>Pay</div>
        {/* <Add />
        <List />
        <Pay /> */}
  {/* <Button 
    onClickFn={() => {
      const items = this.state.items;
        items.push('a');
        this.setState({
          items: items
        });
      }}>Testo
     </Button> */}
        <Button 
          isSelected={() => {
            this.onClickTabAdd()
          }}>Add
          </Button>
          <Button
            isSelected={() => {
              this.onClickTabList()
            }}>List</Button>
          <Button
            isSelected={() => {
              this.onClickTabPay()
            }}>Pay</Button>
      </div>
    );
  }

}

export default App;

//      SUB RENDER      // nel class App extends React.Component{}
// renderNavigation() {
//    return (
//      codici in html
//    );
// }
// renderContent() {
//    return (
//      codici in html
//    );
// }
// render() {
//    return (
//        <div>
//          {this.renderNavigation()}   contiene html sul nav
//          {this.renderContent()}      contiene html sul content
//        </div>
//    )
// }
// export default App;


//      FUNCTION COMPONENTS      //
// import Button
            // nel Button.js //  VECCHIO
            //  class Button extends React.Component {  <=> export default class Button extends React.Component {} /:quando non ci sono proprietà
            // render() {
            //    return (
            //    <button onClick={this.props.onClickFn}>
            //      {this.props.children} 
            //     </button>
            //   )
            //            oppure; NUOVO senza render
            //  const Button = (props) => {
            //    return (
            //    <button 
            //      onClick={props.onClickFn}>
            //      {props.children} 
            //     </button>
            //   }
            //        oppure; senza render
            //  function Button(props) { 
            //     return (
            //        ...
            //      );
            //   }
// render() {
//    return (
//        <div>
//          {this.renderNavigation()}
//          {this.renderContent()}
//           <Button 
//              onClickFn={() => {
//                console.log('ok');
//              }}>Testo
//            </Button>
//        </div>
//    )
// }
// export default App;

//     STATE COMPLEXE      //  serve per aggiungere gli elementi senza modificare lo state iniziale
// class App extends React.Component {
//    constructor(props) 
//    super(props);
//    this.state = {
//      items: [],
//    }
// }
// render() {
//    return (
//        <div>
//          {this.renderNavigation()}
//          {this.renderContent()}
//           <Button 
//              onClickFn={() => {
//                const items = this.state.items;
//                items.push('a');
//                this.setState({
//                  items: items
//                });
//              }}>Testo
//            </Button>
//       //  <p>{this.state.items.join(', ')}</p>
//        </div>
//    )
// }
// export default App;

// per importare il css nella pagina js =>  import './Button.css';