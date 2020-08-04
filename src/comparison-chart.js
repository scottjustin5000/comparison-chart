import React, {useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ComparisonChart = (props) => {
  const [leftWidth, setLeftWidth] = useState('50')
  const [rightWidth, setRightWidth] = useState('50')

useEffect(()=> {
  const left = props.leftValue
  const right = props.rightValue
  const total = left + right
  if(total) {
    setLeftWidth((left / total) * 100)
    setRightWidth((right / total) * 100)
  }
},[props])

return (
  <div style={{width:'100%'}}>
    <div style={{width:'100%', padding:'8px', display:'flex'}}>
      <div style={{width:'33%', textAlign:'left', fontSize: '13px'}}>{props.leftDisplay}</div>
      <div style={{width:'33%', textAlign:'center', fontWeight:800}}>{props.title}</div>
      <div style={{width:'33%', textAlign:'right', fontSize: '13px'}}>{props.rightDisplay}</div>
    </div>
    <div style={{width:'100%', display:'flex', height: props.height}}>
      <div style={{
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius: '5px',
        transition: 'all .5s linear',
        width: `${leftWidth}%`,
        backgroundColor: props.leftColor
      }}></div>
      <div style={{width:'10px'}}></div>
      <div style={{
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius: '5px',
        transition: 'all .5s linear',
        width: `${rightWidth}%`,
        backgroundColor: props.rightColor
      }}></div>
      </div>
  </div>
)
}

ComparisonChart.propTypes = {
 leftValue: PropTypes.number,
 rightValue: PropTypes.number,
 leftDisplay: PropTypes.string,
 rightDisplay: PropTypes.string,
 leftColor: PropTypes.string,
 rightColor: PropTypes.string,
 title: PropTypes.string,
 height: PropTypes.string,
}

ComparisonChart.defaultProps = {
 leftValue: 1,
 rightValue: 1,
 height: '1px',
 leftValue: '',
 rightValue: '',
 leftColor: '#ff6961',
 rightColor:'#45b6fe'
}

export default ComparisonChart