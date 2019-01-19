import React, {Component} from 'react';
import { Grid, Image, Segment, List, Input} from 'semantic-ui-react';
class Background extends Component {

    constructor (props) {
        super (props)
        this.ref = React.createRef();
    }

    state = {
        open: false,
        CityList: [
            {id: 1, name:'Liepaja'},{id: 2, name:'Kuldiga'},{id: 3, name:'Saldus'},{id: 4, name:'Ventspils'}, {id: 5, name:'Jurmala'}, {id: 6, name:'Jelgava'}, {id: 7, name:'Riga'}, {id: 8, name:'Ainazi'}, {id: 9, name:'Ogre'}, {id: 10, name:'Valmiera'}, {id: 11, name:'Jekabpils'},{id: 12, name:'Madona'},{id: 13, name:'Draugavpils'},{id: 14, name:'Aluksne'},{id: 15, name:'Rezekne'},{id: 16, name:'Kraslava'}
        ],
    }

//Functions

    matchCity = (city) => {
        this.state.CityList.forEach((cityList) => {
            if (cityList.name === city) {
                console.log('You picked city' + city);
            }
            else {
                console.log('Sorry! Please try again.');
            }
        })
    }

//END FUNCTIONS

    render() {
        return (
            <div className='latvianMap'>
                <h3 style={{fontSize: '60px', color: 'red', marginLeft:'2%'}}>
                    Latvia
                </h3>
                <Image src='https://simplemaps.com/static/svg/lv/lv.svg' style={{height:'100%', marginLeft:'5%', }} />

                <div onClick = {this.matchCity.bind(this, 'Liepaja')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '70.5%',
                left: '5%',
                }} >
                    <i className=' large red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Riga')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '54.5%',
                left: '36.5%',
                }} >
                    <i className=' large red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Jurmala')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '54%',
                left: '32.5%',
                }}>
                    <i className=' large red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Ventspils')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '37.5%',
                left: '11%',
                }}>
                    <i className=' large red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Daugavpils')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '96.8%',
                left: '60.7%',
                }}>
                    <i className=' large red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Jelgave')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '67%',
                left: '32.5%',
                }}>
                    <i className=' large red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Valmiera')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '32%',
                left: '50%',
                }}>
                    <i className=' large red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Aluksne')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '36%',
                left: '65%',
                }}>
                    <i className=' large red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Saldus')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '67%',
                left: '18%',
                }}>
                    <i className=' large red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Kraslava')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '91.7%',
                left: '67.5%',
                }}>
                    <i className=' large red map marker alternate icon'></i>

                </div>

                <div onClick={this.matchCity.bind(this, 'Rezekne')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '69.7%',
                left: '69%',
                }}>
                    <i className=' large red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Jekabpils')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '69.7%',
                left: '55.9%',
                }}>
                    <i className=' large red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Kuldiga')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '52.2%',
                left: '14.5%',
                }}>
                    <i className=' large red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Ogre')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '61.5%',
                left: '41%',
                }}>
                    <i className=' large red red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Ainazi')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '19.5%',
                left: '38.3%',
                }}>
                    <i className=' large red red map marker alternate icon'></i>
                </div>

                <div onClick={this.matchCity.bind(this, 'Madona')} style={{
                position: 'absolute',
                textAlign: 'right',
                top: '59%',
                left: '58.3%',
                }}>
                Madona <i className=' large red red map marker alternate icon'></i>

                </div>

{/**Label */}
                <div style={{
                position: 'absolute',
                textAlign: 'right',
                top: '2%',
                right: '20.5%',
                }}
                >
                    <Grid columns={2}>
                        <Grid.Column>
                            <Image
                                fluid
                                label={{ as: 'a', color: 'red', content: 'Select the city location', icon: 'map signs'  , ribbon: true, size: 'big' }}
                            />
                        </Grid.Column>
                    </Grid>
                </div>

{/**City list */}
                <div className='cityList' style={{
                position: 'absolute',
                textAlign: 'right',
                top: '12%',
                left: '82%',
                }}>

                    <Segment inverted size='big'>
                        <List inverted divided relaxed>
                            {
                                this.state.CityList.map((list) => {
                                    return (<List.Item key={list.id}>{list.name}</List.Item>)
                                })
                            }
                        </List>


                            {/**<List.Item id='0'>Liepaja<Popup trigger={<Icon circular name='tag' />} content='Area: 60.4 km² | Population: 69,443 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id='1'>Kuldiga<Popup trigger={<Icon circular name='tag' />} content='Area: 13.2 km² | Postal code: LV-330(1–3)' size='mini'/>
                            </List.Item>
                            <List.Item id= '2'>Saldus<Popup trigger={<Icon circular name='tag' />} content='Area: 10.1 km² | Population: 10,311 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id= '3'>Ventspils<Popup trigger={<Icon circular name='tag' />} content='Area: 55.4 km² | Population: 35,362 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id= '4'>Jurmala<Popup trigger={<Icon circular name='tag' />} content='Area: 100 km² | Population: 48,606 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id= '5'>Jelgava<Popup trigger={<Icon circular name='tag' />} content='Area: 63 km² | Population: 56,743 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id= '6'>Riga<Popup trigger={<Icon circular name='tag' />} content='Area: 304 km² | Population: 641,423 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id= '7'>Ainazi<Popup trigger={<Icon circular name='tag' />} content='Area: 5 km² | Population: 711 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id= '8'>Ogre<Popup trigger={<Icon circular name='tag' />} content='Area: 13.58 km² | Population: 23,533 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id= '9'>Valmiera<Popup trigger={<Icon circular name='tag' />} content='Area: 19.35 km² | Population: 22,961 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id= '10'>Jekabpils<Popup trigger={<Icon circular name='tag' />} content='Area: 23 km² | Population: 22,412 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id= '11'>Madona<Popup trigger={<Icon circular name='tag' />} content='Area: 10.5 km² | Postal code: LV-4801 ' size='mini'/>
                            </List.Item>
                            <List.Item id= '12'>Draugavpils<Popup trigger={<Icon circular name='tag' />} content='Area: 72.48 km² | Population: 84,592 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id= '13'>Aluksne<Popup trigger={<Icon circular name='tag' />} content='Area: 14.23 km² | Population: 6,930 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id= '14'>Rezekne<Popup trigger={<Icon circular name='tag' />} content='Area: 17.48 km² | Population: 28,174 (2017)' size='mini'/>
                            </List.Item>
                            <List.Item id= '15'>Kraslava<Popup trigger={<Icon circular name='tag' />} content='Area: 8.5 km² | Population: 7,978 (2017)' size='mini'/>
                            </List.Item>
                        </List>*/}
                    </Segment>
                </div>

{/**Marks */}
                <div className='output' style={{
                    position: 'absolute',
                    textAlign: 'right',
                    top: '92%',
                    left: '3%',
                    }}>
                    <Segment inverted>
                        <Input inverted placeholder='marks' />

                    </Segment>
                </div>

            </div>
        );
    }

}

export default Background;
