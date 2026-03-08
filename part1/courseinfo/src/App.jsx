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
    <Part part='Fundamentals of React' exercises={content.content['Fundamentals of React']} />
    <Part part='Using props to pass data' exercises={content.content['Using props to pass data']} />
    <Part part='State of a component' exercises={content.content['State of a component']} />
    </>
  )
}

const Total = (total) => {
  return (
    <p>Number of exercises: {total.total['Fundamentals of React'] + total.total['Using props to pass data'] + total.total['State of a component']}</p>
  )
}


const App = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const content_dict = {
    'Fundamentals of React': exercises1,
    'Using props to pass data': exercises2,
    'State of a component': exercises3
  }
  return (
    <div>
    <Header course='Half Stack application development' />
    <Content content={content_dict} />
    <Total total={content_dict} />
    </div>
  )
}

export default App