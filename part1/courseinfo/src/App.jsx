// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

const Header = (course) => {
  return (
      <h1>{course.course}</h1>
  )
}

const Part = (part) => {
  return (
    <p>
      {part.part} {part.exercises}
    </p>
  )
}

const Content = (content) => {
  return (
    <>
    <Part part={content.parts[0].name} exercises={content.parts[0].exercises} />
    <Part part={content.parts[1].name} exercises={content.parts[1].exercises} />
    <Part part={content.parts[2].name} exercises={content.parts[2].exercises} />
    </>
  )
}

const Total = (total) => {
  return (
    <p>Number of exercises: {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}

export default App