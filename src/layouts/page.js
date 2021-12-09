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
                <div className="page__body text-block"> 
                  <p>
                    <h4>
                      STUDI MEDICI SAN LU.CA.
                    </h4>
                    <h5>Toscana Capannori (Lucca)</h5>
                    <h6>Via Pesciatina, Lunata 60</h6>
                  <a href="https://www.google.com/maps/place/Via+Pesciatina,+60,+55012+Capannori+LU/@43.855068,10.5591609,17z/data=!3m1!4b1!4m5!3m4!1s0x12d58117a53792fb:0x4d45e992105b8b61!8m2!3d43.8550642!4d10.5613496">
                      <img src="../../images/studimediciSanLuca.png" alt="studi medici san luca"></img>
                  </a>
                  </p>
                   <p> 
                      <h4>
                      STUDI MEDICI SAN LU.CA.
                    </h4>
                    <h5>Toscana Capannori (Lucca)</h5>
                    <h6>Via Pesciatina, Lunata 60</h6>
                  <a href="10.5591609,17z/data=!3m1!4b1!4m5!3m4!1s0x12d58117a53792fb:0x4d45e992105b8b61!8m2!3d43.855064!4d10.5613496">
                      <img src="../../images/studimediciSanLuca.png" alt="st
                   </p>
                


                </div>
            </div>
            </article>
            </Layout>
        );
    }
}
