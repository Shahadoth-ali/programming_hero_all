/* eslint-disable no-unused-vars */



import PropTypes from 'prop-types';
import { LineChart as LC, Line, XAxis, YAxis} from 'recharts';

const LineChart = props => {

    const studentMarks = [
        { "student_id": 1, "name": "Alice", "physics_marks": 85, "math_marks": 90, "chemistry_marks": 88 },
        { "student_id": 2, "name": "Bob", "physics_marks": 78, "math_marks": 82, "chemistry_marks": 79 },
        { "student_id": 3, "name": "Charlie", "physics_marks": 90, "math_marks": 95, "chemistry_marks": 92 },
        { "student_id": 4, "name": "David", "physics_marks": 82, "math_marks": 88, "chemistry_marks": 85 },
        { "student_id": 5, "name": "Emma", "physics_marks": 76, "math_marks": 70, "chemistry_marks": 48 },
        { "student_id": 6, "name": "Frank", "physics_marks": 88, "math_marks": 92, "chemistry_marks": 90 },
        { "student_id": 7, "name": "Grace", "physics_marks": 80, "math_marks": 85, "chemistry_marks": 92 },
        { "student_id": 8, "name": "Hannah", "physics_marks": 92, "math_marks": 96, "chemistry_marks": 94 },
        { "student_id": 9, "name": "Ian", "physics_marks": 84, "math_marks": 88, "chemistry_marks": 86 },
        { "student_id": 10, "name": "Julia", "physics_marks": 79, "math_marks": 83, "chemistry_marks": 80 }
      ];
      
      

  return (
    <div>
      <LC width={900} height={400} data={studentMarks}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
      <XAxis dataKey="name" />
  <YAxis />
      <Line dataKey="physics_marks" stroke="#8884d8"></Line>
      <Line dataKey="math_marks" stroke="#82ca9d"></Line>
      <Line dataKey="chemistry_marks"></Line>
      </LC>
    </div>
  )
}

LineChart.propTypes = {

}

export default LineChart
