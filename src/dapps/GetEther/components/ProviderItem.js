import React from 'react';
import {
    Media
} from 'reactstrap';

class ProviderItem extends React.Component {
    render() {
        const item = this.props.item
        const url = item.url
        return (
            <a className="providerItem" href={url}>
                <Media className="mt-1 align media-block">
                    <Media left bottom>
                        <img src={item.image} alt="logo" className="media-logo" />
                    </Media>
                    <Media body>
                        <Media heading>
                            {item.name}
                        </Media>
                        {item.description}
                    </Media>
                </Media>
            </a>
        )
    }
}

export default ProviderItem;