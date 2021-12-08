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
                    <h4 className="page__body text-block">
                      STUDI MEDICI SAN LU.CA.
                    </h4>
                    <h5>Toscana Capannori (Lucca)</h5>
                    <h6
            	</div>
            </article>
            </Layout>
        );
    }
}
