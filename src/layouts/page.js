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
                        <Link className="navbar__logo m-0" href={https:"//www.google.com/maps/place/Via+dell'+Isola,+16,+55012+Capannori+LU/@43.8548052,10.5591787,17z/data=!3m1!4b1!4m5!3m4!1s0x12d58117b9862b25:0x91bda9cbf1454f5a!8m2!3d43.8548052!4d10.5613674}><img src={withPrefix(_.get(this.props, 'data.config.header.logo', null))} alt={_.get(this.props, 'data.config.header.logo_alt', null)} /></Link>
            		</div>
            	</div>
            </article>
            </Layout>
        );
    }
}
