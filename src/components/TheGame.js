import React, { Component } from "react";
import { Grid, Image, Input, List, Segment } from "semantic-ui-react";

class Background extends Component {
  state = {
    CityList: [
      { id: 0, name: "Liepaja" },
      { id: 1, name: "Kuldiga" },
      { id: 2, name: "Saldus" },
      { id: 3, name: "Ventspils" },
      { id: 4, name: "Jurmala" },
      { id: 5, name: "Jelgava" },
      { id: 6, name: "Riga" },
      { id: 7, name: "Ainazi" },
      { id: 8, name: "Ogre" },
      { id: 9, name: "Valmiera" },
      { id: 10, name: "Jekabpils" },
      { id: 11, name: "Madona" },
      { id: 12, name: "Daugavpils" },
      { id: 13, name: "Aluksne" },
      { id: 14, name: "Rezekne" },
      { id: 15, name: "Kraslava" }
    ]
  };

  /********************************************FUNCTION*********************************/

  deleteCity = index => {
    const del = Object.assign([], this.state.CityList);
    del.splice(index, 1);
    this.setState({ CityList: del });
  };

  matchCity = city => {
    this.state.CityList.forEach(cityList => {
      if (cityList.name === city) {
        alert(
          "You picked city: " + city + ' Select "OK" to remove it from the list'
        );
        this.deleteCity(cityList.id);
      }
    });
  };
  /*************************************END FUNCTIONS*****************************************/
  render() {
    return (
      <div>
        {/*********************************MAIN MAP*************************************************/}

        <div className="latvianMap">
          <h3 style={{ fontSize: "60px", color: "red", marginLeft: "2%" }}>
            Latvia
          </h3>
          <Image
            src="https://simplemaps.com/static/svg/lv/lv.svg"
            style={{ height: "100%", marginLeft: "5%" }}
          />
        </div>

        {/*****************************************CITY LIST*********************************************/}
        <div
          className="cityList"
          style={{
            position: "absolute",
            textAlign: "right",
            top: "12%",
            left: "82%"
          }}
        >
          <Segment inverted size="big">
            <List inverted divided relaxed>
              {this.state.CityList.map((cList, index) => {
                return (
                  <List.Item
                    onClick={this.deleteCity.bind(this, index)}
                    key={cList.id}
                  >
                    {cList.name}
                  </List.Item>
                );
              })}
            </List>
          </Segment>
        </div>

        {/*****************************************LOCATIONS*********************************************/}

        <div
          onClick={this.matchCity.bind(this, "Liepaja")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "70.5%",
            left: "5%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Riga")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "54.5%",
            left: "36.5%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Jurmala")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "54%",
            left: "32.5%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Ventspils")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "37.5%",
            left: "11%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Daugavpils")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "96.8%",
            left: "60.7%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Jelgava")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "67%",
            left: "32.5%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Valmiera")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "32%",
            left: "50%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Aluksne")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "36%",
            left: "65%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Saldus")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "67%",
            left: "18%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Kraslava")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "91.7%",
            left: "67.5%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Rezekne")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "69.7%",
            left: "69%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Jekabpils")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "69.7%",
            left: "55.9%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Kuldiga")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "52.2%",
            left: "14.5%"
          }}
        >
          <i className=" large red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Ogre")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "61.5%",
            left: "41%"
          }}
        >
          <i className=" large red red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Ainazi")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "19.5%",
            left: "38.3%"
          }}
        >
          <i className=" large red red map marker alternate icon" />
        </div>

        <div
          onClick={this.matchCity.bind(this, "Madona")}
          style={{
            position: "absolute",
            textAlign: "right",
            top: "59%",
            left: "58.3%"
          }}
        >
          <i className=" large red red map marker alternate icon" />
        </div>

        {/**********************************************Label***********************************************/}
        <div
          style={{
            position: "absolute",
            textAlign: "right",
            top: "2%",
            right: "20.5%"
          }}
        >
          <Grid columns={2}>
            <Grid.Column>
              <Image
                fluid
                label={{
                  as: "a",
                  color: "red",
                  content: "Select the city location",
                  icon: "map signs",
                  ribbon: true,
                  size: "big"
                }}
              />
            </Grid.Column>
          </Grid>
        </div>

        {/***********************************************Marks********************************************/}
        <div
          className="output"
          style={{
            position: "absolute",
            textAlign: "right",
            top: "92%",
            left: "3%"
          }}
        >
          <Segment inverted>
            <Input inverted placeholder="marks" />
          </Segment>
        </div>
      </div>
    );
  }
}

export default Background;
