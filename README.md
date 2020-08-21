# comparison-chart

> react comparison chart

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example

[here](http://sj5000-comparison-chart.s3-website-us-east-1.amazonaws.com/)

## Usage

```jsx
import React, { Component } from 'react'

import ComparisonChart from 'comparison-chart'

class Example extends Component {
  render() {
    return (  
      <ComparisonChart 
        height='3px'
        leftColor='#ff6961'
        rightColor='#45b6fe'
        title='Field Goals'
        leftDisplay='(42%) 38/90'
        rightDisplay='(46%) 40/88'
        leftValue={42}
        rightValue={46} />
      )
  }
}
```


