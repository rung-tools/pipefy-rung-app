import { h } from 'preact'

const styles = {
    link: {
        textDecoration: 'none'
    },
    card: {
        position: 'relative',
        width: '167px',
        height: '127px',
        display: 'inline-block',
        margin: '2px',
        border: '1px solid silver',
        padding: '0 10px',
        paddingTop: '10px',
        overflowX: 'hidden',
        overflowY: 'auto',
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif'
    }
}

export default props => (
    <a
        style={ styles.link }
        href={ `https://app.rung.com.br/i/${props.id}/?ref=pipefy` }
        target="_blank">
        <div
            className="custom-scrollbar"
            style={ styles.card }
            dangerouslySetInnerHTML={ { __html: props.content } }
        />
    </a>
)
