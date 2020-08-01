import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        activeTab: "add",
        items: [],
      };

      this.onClickTabAdd = this.onClickTabAdd.bind(this);
      this.onClickTabList = this.onClickTabList.bind(this);
      this.onClickTabPay = this.onClickTabPay.bind(this);
      this.onAdd = this.onAdd.bind(this);
    }

    onClickTabAdd() {
      this.setState({
        activeTab: "add"
      });
    }

    onClickTabList() {
      this.setState({
        activeTab: "list"
      });
    }

    onClickTabPay() {
      this.setState({
        activeTab: "pay"
      });
    }

    onAdd(price, input) {
      const items = this.state.items;
      items.push({
        price,
        input})
      this.setState({
        items,
        activeTab: 'list'
      });
    }

  render() {
    const {
      activeTab,
      items
  } = this.state;
    return (
      <div className="container-fluid">
          <div className="row justify-content-center">
              <h1>Bakery</h1>
          </div>
          <div className="row">
              <Button 
                isSelected={this.state.activeTab === 'add'}
                onClick={this.onClickTabAdd}>
                  Add</Button>
              <Button
                isSelected={this.state.activeTab === 'list'}
                onClick={this.onClickTabList}>
                  List</Button>
              <Button 
                isSelected={this.state.activeTab === 'pay'}
                onClick={this.onClickTabPay}>
                  Pay</Button>
            </div>
            <div className='row'>
              {activeTab === 'add' && <Add onAdd={this.onAdd} />}
              {activeTab === 'list' && <List items={items} />}
              {activeTab === 'pay' && <Pay items={items} />}
         </div> 
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