import { h, render } from 'preact'
import Attachments from '../components/Attachments'

/* global pipefyClient */
const AttachmentsRenderer = () => (
    <Attachments pipefy={ PipefyApp } />
)

render(<AttachmentsRenderer />, document.getElementById('app'))
