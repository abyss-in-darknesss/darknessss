import React, { Component } from 'react';

import { ItemList } from 'components';

class Home extends Component {
  render() {
    return(
      <div className="content">
        <ItemList/>
      </div>
    )
  }
}

export default Home;