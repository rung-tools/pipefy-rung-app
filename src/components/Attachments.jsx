import { h, Component } from 'preact'
import { map } from 'ramda'
import Integration from './Integration'
import Alert from './Alert'

export default class Attachments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            integrations: [],
            loading: true
        }
    }

    fetchIntegrations() {
        const attachments = [{
            id: 'frobnicate',
            url: 'https://app.rung.com.br/api/extensions/public/bcc878e20bb218fbfe6b740c5859bb5ed4edbdb9a57586f41119b05d8e209f083d7229f75c4aeea243c19ccf3d2be5e5/alerts',
            name: 'Steam Discounts'
        }]

        const request = attachments
            | map(({ id, url, name }) => fetch(url)
                .then(response => response.json())
                .then(alerts => ({ id, url, name, alerts })))
            | this.props.pipefy.Promise.all

        request.then(integrations => {
            this.setState({ loading: false, integrations })
        })
    }

    componentDidMount() {
        this._pipefyInstance = this.props.pipefy.init()
        this.props.pipefy.resizeTo('#app')
        this.fetchIntegrations()
    }

    componentDidUpdate() {
        this.props.pipefy.resizeTo('#app')
    }

    render(props, state) {
        if (state.loading) {
            return <p>Loading...</p>
        }

        if (state.integrations.length === 0) {
            return <p>You don't have Rung integrations attached to this card.</p>
        }

        return (
            <div>
                { state.integrations | map(integration => (
                    <Integration
                        key={ integration.id }
                        name={ integration.name }>
                        { integration.alerts | map(alert => (
                            <Alert
                                key={ alert.id }
                                id={ alert.id }
                                content={ alert.content }
                            />
                        )) }
                    </Integration>
                )) }
            </div>
        )
    }
}
