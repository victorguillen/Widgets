import React, { Component } from 'react';
import './App.css';

class Headers extends Component {
  render() {
    let selected = this.props.selectedTab;
    let headers = this.props.tabs.map((tab, index) => {
      let klass = '';
      let title = tab.title;
      if(index === selected) {
        klass = 'active';
      }
      return(
        <li
          key={index}
          onClick={this.props.onTabChosen.bind(null, index)}
          className={klass}
          >
          {title}
        </li>
      );
    });
    return(
      <ul>
        {headers}
      </ul>
    );
  }
}

class Tabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
    this.selectedTab = this.selectedTab.bind(this);
  }

  selectedTab(num) {
    this.setState({selectedTab: num});
  }

  render() {
    let tab = this.props.tabs[this.state.selectedTab];
    return (
      <div className="box">
        <div className="tabs">
          <Headers
            selectedTab={this.state.selectedTab}
            onTabChosen={this.selectedTab}
            tabs={this.props.tabs}>
          </Headers>
        </div>
        <div className='tab-content'>
          {tab.content}
        </div>
      </div>
    );
  }
}

export default Tabs;
