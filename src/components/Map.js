import React from 'react'
import { Grid, Image } from "semantic-ui-react";

const Map = () => {
    return (
        <div>

{/**MAP */}
            <div className = 'latvianMap' >
                <h3 style={{ fontSize: '48px', color: 'red', marginLeft: '2%',}}>
                    Latvia
                </h3>
            </div>
            
            <div>
                <Image src='https://simplemaps.com/static/svg/lv/lv.svg' style={{ height: '100%', marginLeft: '5%', }} />
            </div>

{/**Label*/}
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
        </div>
    )

}

export default Map;
