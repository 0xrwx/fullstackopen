const Header = ({ course }) => <h2>{course}</h2>

const Part = ({ part, exercise }) => <p>{part} {exercise}</p>

const Content = ({ parts }) => (
  <div>
    {parts.map(part => 
      <Part key={part.id} part={part.name} exercise={part.exercises} />
    )}
  </div>
)

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((a, b) => a + b.exercises, 0)
  return (
    <p><b>total of {totalExercises} exercises</b></p>
  )
}

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default Course