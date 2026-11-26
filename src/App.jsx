import { useState } from 'react'

function EmployeeAward({ name, years }) {
  return (
    <span class="border">
      <h2>{name}</h2>
      <p>
        Years at Company: {years}
      </p>
      <p>
        {years >= 5 ? "Eligible for Long Service Award 🎉" : "Not Eligible"}
      </p>
    </span>
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


