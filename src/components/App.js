import Header from "./Header";
import React from "react";
// import { Switch, Route, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { MobxRouter } from "mobx-router";

@inject("userStore", "commonStore")
@observer
class App extends React.Component {
  componentWillMount() {
    if (!this.props.commonStore.token) {
      this.props.commonStore.setAppLoaded();
    }
  }

  componentDidMount() {
    if (this.props.commonStore.token) {
      this.props.userStore
        .pullUser()
        .finally(() => this.props.commonStore.setAppLoaded());
    }
  }

  render() {
    if (this.props.commonStore.appLoaded) {
      return (
        <div>
          <Header />
          <MobxRouter />
        </div>
      );
    }
    return <Header />;
  }
}

export default App;
