import { h, render } from 'preact'
import Attachments from '../components/Attachments'

const AttachmentsRenderer = () => <Attachments pipefy={ PipefyApp } />

render(<AttachmentsRenderer />, document.getElementById('app'))
