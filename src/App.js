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
        items: items,
        activeTab: 'list'
      });
    }

    renderTabAdd() {
      if (this.state.activeTab === "add") {
        return (
          <Add />
        );
      }
      return null;
    }

    renderTabList() {
      if (this.state.activeTab === "list") {
        return (
          <List />
        );
      }
      return null;
    }

    renderTabPay() {
      if (this.state.activeTab === "pay") {
        return (
          <Pay />
        );
      }
      return null;
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
              {activeTab === 'add' && <Add onSubmit={this.onAdd} />}
              {activeTab === 'list' && <List items={items} />}
              {activeTab === 'pay' && <Pay />}

              {/* {this.renderTabAdd()}
              {this.renderTabList()}
              {this.renderTabPay()} */}
          </div>
      </div>
    );
  }

}

export default App;

