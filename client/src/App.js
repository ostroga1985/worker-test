
import './App.css';
import { useState } from 'react';
import { FileUploader, Timer, Logo, Button, Toggle } from './components';
import { Row } from './common/Row'
import { transferToWorker, resizeAndSend } from './utils'

const swap = {
  paused: 'running',
  running: 'paused'
}

function App() {
  const [playState, setPlayState] = useState('running')
  const [isMainMode, setWorkerStatus] = useState(true)

  const changeDirection = () => {
    setPlayState(swap[playState])
  }

  const changeStatus = () => {
    setWorkerStatus(!isMainMode)
  }

  return (
    <div className='wrapper'>
      <Row>
        <Logo swap={swap} status={playState} />
        <Button clickHandler={changeDirection} />
      </Row>
      <Row>
        <Timer />
      </Row>
      <Row>
        <FileUploader processFiles={isMainMode ? resizeAndSend : transferToWorker} />
      </Row>
      <Row>
        <div>Image processing thread</div>
        <Toggle clickHandler={changeStatus} />
      </Row>
    </div>
  );
}

export default App;
