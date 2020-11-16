import './App.css';
import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import AvailKits from "./components/AvailKits";

import axios from "axios";

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      kits: [],
    };

    this.addToProj = this.addToProj.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/kits")
      .then((res) => {
        this.setState({ kits: res.data });
      })
      .catch((err) => console.log(err));
  }

  addToProj(id) {
    axios
      .post(`/api/kits/${id}`)
      .then((res) => {
          this.setState({ kits: res.data });
      })
      .catch((err) => console.log(err));
  }

  deleteProj = (index) => {
    axios 
      .delete(`/api/kits/${index}`)
      .then((res) => {
        this.setState({ kits: res.data });
      })
      .catch((err) => console.log(err));
  };

  editProj = (index, datePainted) => {
    axios
      .put(`/api/team/${index}`, { datePainted })
      .then((res) => {
        this.setState({ kits: res.data });
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <Header />
        <main className="main-box">
          <AvailKits
          kits={this.state.kits}
          deleteProj={this.deleteProj}
          datePainted={this.datePainted}
          />
          <Gallery addToProj={this.addToProj} />
        </main>
      </div>
    );
  }
}

export default App;