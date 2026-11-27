import { useState } from 'react'

function EmployeeAward({ name, years }) {
  return (
    <div
      style={{
        border: '2px solid #ccc',
        padding: '10px',
        margin: '10px',
        borderRadius: '6px',
        width: '300px',
      }}>

      <h2>{name}</h2>
      <p>
        Years at Company: {years}
      </p>
      <p>
        {years >= 5 ? "Eligible for Long Service Award 🎉" : "Not Eligible"}
      </p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <h1>Employee Awards</h1>

      <EmployeeAward name="Alice Tan" years={2} />
      <EmployeeAward name="Ben Wong" years={6} />
      <EmployeeAward name="Chloe Lim" years={10} />
      <EmployeeAward name="Daniel Lee" years={4} />
    </>
  )
}


