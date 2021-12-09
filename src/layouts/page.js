import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {markdownify} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <article className="page py-5 py-sm-6">
            	<div className="container container--medium">
            		<header className="page__header">
            			<h1 className="page__title">{_.get(this.props, 'page.title', null)}</h1>
            		</header>
            		<div className="page__body text-block">
                        {markdownify(_.get(this.props, 'page.content', null))} 
            		</div>
                <div className="page__body text-block class_p"> 
                  <p >
                    <h4>
                      STUDI MEDICI SAN LU.CA.
                    </h4>
                    <h5>Capannori (Lucca)</h5>
                    <h6>Via Pesciatina, Lunata 60</h6>
                  <a href="https://www.google.com/maps/place/Via+Pesciatina,+60,+55012+Capannori+LU/@43.855068,10.5591609,17z/data=!3m1!4b1!4m5!3m4!1s0x12d58117a53792fb:0x4d45e992105b8b61!8m2!3d43.8550642!4d10.5613496">
                      <img src="../../images/studimedicisanluca1.png" alt="studi medici san luca"  width="80%" height="80%"></img>
                  </a>
                  </p>
                   <p> 
                      <h4>
                      STUDI DI PSICOTERAPIA E NUTRIZIONE 
                    </h4>
                    <h5> Fucecchio (Firenze)</h5>
                    <h6>Via Giotto 13</h6>
                  <a href="https://www.google.it/maps/place/Via+Giotto+di+Bondone,+3,+50054+Fucecchio+FI/@43.7261551,10.8032643,18z/data=!4m5!3m4!1s0x132a6fe335bfab0b:0xf1d1a9d136709671!8m2!3d43.7261295!4d10.8041557">
                      <img src="../../images/fucecchio1.jpg" alt="fucecchio"  width="80%" height="80%"></img>
                     </a>
                  </p>

                   <p> 
                      <h4>
                      Ambulatori Medici Misericordia Lido di Camaiore
                    </h4>
                    <h5> Camaiore (Lucca)</h5>
                    <h6>Via del Secco, Camaiore 81</h6>
                  <a href="https://www.google.it/maps/place/Via+del+Secco,+81,+55041+Camaiore+LU/@43.9046493,10.2256609,17z/data=!4m5!3m4!1s0x12d5a0529d4019bb:0x6f18e12b0442a8d5!8m2!3d43.9046706!4d10.2261066">
                      <img src="../../images/lucca1.jpg" alt="Lucca" width="80%" height="80%"></img>
                     </a>
                  </p>
                
                </div>
            </div>
            </article>
            </Layout>
        );
    }
}
