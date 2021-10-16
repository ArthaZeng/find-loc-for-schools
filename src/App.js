import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { r } from "./input";
// import { res } from "./result";
// import { r } from "./res";
// import { readFile } from "fs";

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=<<GOOGLE API KEY>>
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=29.502272,106.510676&radius=5000&keyword=%E5%B0%8F%E5%AD%A6&key=<<GOOGLE API KEY>>

class App extends Component {
  print(r) {
    let str = "";
    r.forEach(i => {
      str = str + i + "\n";
      // console.log(str);
    });
    return str;
  }
  render() {
    // // const searchStr =
    //   // "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=29.541144,106.456877&radius=5000%E5%B0%8F%E5%AD%A6&key=<<GOOGLE API KEY>>";
    // // let { results, next_page_token } = this.retrieveRequest(searchStr);
    // // if (results) {
    // //   const r = this.extractInfo(results.results);
    // //   for (let i = 0; i < 5; i++) {
    // //     const url =
    //       "https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=" +
    //       next_page_token +
    //       "&key=<<GOOGLE API KEY>>";
    //
    //
    //
    //       https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=CsQDtwEAADmdghCPmL14poag2WhxhnoklNFitLXFlmOgj1swXFtz4sXx8b5MZy9R7gmWny-qV7B-wGRP1aevMH7oVTlFuCal22rug1T3RRI-oVlGFCVNveB2cu5_LnO-YkuPDnfxD3IfyIjb_UoIJeSj0ITyNs_6E-YmW62shZYQhiSINUvjnRcpnwEPIubP5ugA8CnGSIwUZyhoJAkBNpEFt6Evr5ndsBZ8voEA85GqrQOaYOguHak_fDfjbatk0_ITJInqEnDpPfG_lIhByoNJcA27-_aIY9aW7BXLvoJHhcQKhMp__HFe1VKyxFeAAb6_L_nv7lqKfDXWhXoAQBfw-oLWVyasK1q899CiX4LXRKR90EYf1wuNVhSrDm7aGaggzRrR7Mvz1u4GL2WVlfZ8ByvXGLdMPhxWJBGELM7vAAj-yY-Vo3agZbJ10xf70xRkUpHo_CRVNTSI_J5WlRFfgnJpevcZZ-K8kFDGOoM71_-28ZNYcHmj7V63KvUL9V1KvbW4qHdTinsReFkcnGMsMZ3Qc2eAakrJISBnb6AGAFW9mHq2fT809c-3ttW4_EY6kum9YHukSGcbQkrRXEPztUZIG-cSEKX2x4riigMEzUeIMeUAgdcaFI1ZB5Lkkxe7kmAbZcccbfRlOweH&key=<<GOOGLE API KEY>>
    //
    //
    // //     let { results, next_page_token } = this.retrieveRequest(url);
    // //     r.push(this.extractInfo(results));
    // //   }
    // //   console.log(r);
    // // }
    //
    // const results = res.results;
    // const list = results.map(r => {
    //   return [r.geometry.location, r.name];
    // });

    // const result = [...new Set(r)];
    // const show = this.print(result);
    // console.log(show);

    var googleMapsClient = require("@google/maps").createClient({
      key: "<<GOOGLE API KEY>>"
    });

    // Geocode an address.
    const res = [];
    r.forEach(f => {
      googleMapsClient.geocode(
        {
          address: f
        },
        function(err, response) {
          if (!err) {
            if (response.json.results.length !== 0) {
              // console.log(response.json.results);
              const loc = response.json.results[0].geometry.location;
              res.push([f, loc.lat, loc.lng, "\n"].toString());
              console.log(res.toString());
            }
          }
        }
      );
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {res}
        </p>
      </div>
    );
  }
}

export default App;
