import React from 'react'

const Rank = ({ user: { name, entries } }) => {
  console.log('rank', name, entries)

  return (
    <div className="mt6">
      <div className="light-purple f3 tc">{`${name}, your current entry count is...`}</div>
      <div className="light-purple f1 tc">{entries}</div>
    </div>
  )
}

export default Rank
