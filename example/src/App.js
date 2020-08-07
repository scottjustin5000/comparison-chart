import React from 'react'

import { ComparisonChart } from 'comparison-chart'
import 'comparison-chart/dist/index.css'

const App = () => {
  return (
  <div style={{padding:'10px'}}>
    <div style={{width:'100%'}}>
      <ComparisonChart 
        height='3px'
        leftColor='#ff6961'
        rightColor='#45b6fe'
        title='Field Goals'
        leftDisplay='(42%) 38/90'
        rightDisplay='(46%) 40/88'
        leftValue={42}
        rightValue={46} />
    </div>
  </div>)
}

export default App
