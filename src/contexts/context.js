
import React from 'react'
export const nameContext = React.createContext()
export const ageContext = React.createContext()


function NameProvider(props) {
  const [name, setName] = React.useState('saurabh')
  return <nameContext.Provider value={[name, setName]} {...props} />
}

function AgeProvider(props) {
  const [age, setAge] = React.useState(30)
  return <ageContext.Provider value={[age, setAge]} {...props} />
}

export default {NameProvider, AgeProvider}
