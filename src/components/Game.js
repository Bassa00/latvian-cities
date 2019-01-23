import React, { Component } from 'react';
import { Grid, Image, List, Segment, Popup } from "semantic-ui-react";

class Background extends Component {

    state = {
        CityList: [
            {
                id: 0,
                name: 'Liepaja',
                top: '67.5%',
                left: '5%',
                pops: 'Area: 60.4 km² | Population: 69,443',
            },
            {
                id: 1,
                name: 'Kuldiga',
                top: '49.2%',
                left: '14.5%',
                pops: 'Area: 13.2 km² | Postal code: LV-330(1–3)',
            },
            {
                id: 2,
                name: 'Saldus',
                top: '63%',
                left: '18%',
                pops: 'Area: 10.1 km² | Population: 10,311',
            },
            {
                id: 3,
                name: 'Ventspils',
                top: '32.5%',
                left: '10.5%',
                pops: 'Area: 55.4 km² | Population: 35,362',
            },
            {
                id: 4,
                name: 'Jurmala',
                top: '50%',
                left: '32.5%',
                pops: 'Area: 100 km² | Population: 48,606',
            },
            {
                id: 5,
                name: 'Jelgava',
                top: '61%',
                left: '32.5%',
                pops: 'Area: 63 km² | Population: 56,743',
            },
            {
                id: 6,
                name: 'Riga',
                top: '51.5%',
                left: '36.5%',
                pops: 'Area: 304 km² | Population: 641,423',
            },
            {
                id: 7,
                name: 'Ainazi',
                top: '17.5%',
                left: '38.3%',
                pops: 'Area: 5 km² | Population: 711',
            },
            {
                id: 8,
                name: 'Ogre',
                top: '57.5%',
                left: '41%',
                pops: 'Area: 13.58 km² | Population: 23,533',
            },
            {
                id: 9,
                name: 'Valmiera',
                top: '30%',
                left: '50%',
                pops: 'Area: 19.35 km² | Population: 22,961',
            },
            {
                id: 10,
                name: 'Jekabpils',
                top: '66.7%',
                left: '55.9%',
                pops: 'Area: 23 km² | Population: 22,412',
            },
            {
                id: 11,
                name: 'Madona',
                top: '56%',
                left: '58.3%',
                pops: 'Area: 10.5 km² | Postal code: LV-4801',
            },
            {
                id: 12,
                name: 'Daugavpils',
                top: '93.8%',
                left: '60.7%',
                pops: 'Area: 72.48 km² | Population: 84,592',
            },
            {
                id: 13,
                name: 'Aluksne',
                top: '33%',
                left: '65%',
                pops: 'Area: 14.23 km² | Population: 6,930',
            },
            {
                id: 14,
                name: 'Rezekne',
                top: '65.7%',
                left: '68%',
                pops: 'Area: 17.48 km² | Population: 28,174',
            },
            {
                id: 15,
                name: 'Kraslava',
                top: '88.7%',
                left: '67.5%',
                pops: 'Area: 8.5 km² | Population: 7,978',
            }
        ],
    }

    /********************************************FUNCTION*********************************/

    deleteCity = (index) => {
        const del = Object.assign([], this.state.CityList)
        del.splice(index, 1);
        this.setState({ CityList: del })
    }

    matchCity = (city) => {
        this.state.CityList.forEach((cityList) => {
            if (cityList.name === city) {
                alert('You picked city: ' + city + ' Select "OK" to remove it from the list');
                this.deleteCity(cityList.id);
            }
        })
    }

    /*************************************END FUNCTIONS*****************************************/
    render() {
        return (
            <div>

                { /*********************************MAIN MAP*************************************************/}

                <div className='latvianMap' >
                    <h3 style={{ fontSize: '48px', color: 'red', marginLeft: '2%', }}>
                        Latvia
                    </h3>
                </div>
                <div>
                    <Image src='https://simplemaps.com/static/svg/lv/lv.svg' style={{ height: '100%', marginLeft: '5%', }} />
                </div>

                {/**********************************************Label***********************************************/}

                <div style={{
                    position: 'absolute',
                    textAlign: 'right',
                    top: '0%',
                    right: '20.5%',
                }}
                >
                    <Grid columns={2}>
                        <Grid.Column>
                            <Image
                                fluid
                                label={{ as: 'a', color: 'red', content: 'Select the city location', icon: 'map signs', ribbon: true, size: 'big' }}
                            />
                        </Grid.Column>
                    </Grid>
                </div>

                {/*****************************************CITY LIST*********************************************/}

                <div className='cityList' style={{
                    position: 'absolute',
                    textAlign: 'right',
                    top: '9%',
                    left: '87%',
                }}>

                    <Segment inverted size='big'>
                        <List inverted divided relaxed>
                            {this.state.CityList.map((cList, index) => {
                                return (
                                    <List.Item
                                        onClick={this.deleteCity.bind(this, index)}
                                        key={cList.id}
                                    >
                                        {cList.name}
                                    </List.Item>
                                )
                            })}
                        </List>
                    </Segment>
                </div>

        {/*****************************************LOCATIONS*********************************************/}

                <div>
                    {this.state.CityList.map((location, i) => {
                        return (
                            <div
                                onClick={this.matchCity.bind(this, location.name)}
                                key={location.id}
                                style={{
                                    position: 'absolute',
                                    textAlign: 'right',
                                    top: location.top,
                                    left: location.left,
                                }}
                            >
                                <Popup inverted trigger={<i className=' large red map marker alternate icon' />}>
                                    {location.pops}

                                </Popup>
                            </div>
                        )
                    })}
                </div>

            </div>
        );
    }
}

export default Background;
