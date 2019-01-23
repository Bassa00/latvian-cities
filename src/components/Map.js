import React from 'react'
import { Grid, Image } from "semantic-ui-react";

const Map = () => {
    return (
        <div>

{/**MAP */}
            <div className = 'latvianMap' style={{display:'inline'}} >
                <p style={{ fontSize: '39px', color: 'red', marginLeft: '2%',}}>
                    <Image width='8%' style={{display:'inline'}}src='http://beststickers.net/image/cache/catalog/products/vinyl/latvia/latvian-flag-map-coat-of-arms-car-stickerd-decal-vinyl-2800x1600.png' />Latvia 
                </p>
                
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
