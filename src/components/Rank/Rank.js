import React from 'react'

const Rank = ({ user: { name, entries } }) => {
  return (
    <div className="mt5">
      <div className="light-purple f3 tc">{`${name}, your current entry count is...`}</div>
      <div className="light-purple f1 tc">{entries}</div>
    </div>
  )
}

export default Rank
