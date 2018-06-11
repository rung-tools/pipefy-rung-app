import { h } from 'preact'

export default props => (
    <div className="pp-open-card-apps">
        <a
            href={ props.url }
            target="_blank"
            title="View on Rung"
            className="pp-open-card-apps-link"
            tabIndex="1">
            <h3 className="pp-title-4">{ props.name }</h3>
        </a>
        <a href="#remove" title="Remove" className="pp-ico-close" onClick={ props.onRemove } />
        <div>{ props.children }</div>
    </div>
)
