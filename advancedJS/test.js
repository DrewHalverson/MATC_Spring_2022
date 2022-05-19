const students = [{"id": 1, "name": "joe blow", "gpa": 2.32}, {"id": 2, "name": "mary tester", "gpa": 3.32}, {"id": 3, "name": "steve stone", "gpa": 3.64}, {"id": 4, "name": "sue shoe", "gpa": 3.91}, {"id": 5, "name": "anne elephant", "gpa": 2.86}, {"id": 6, "name": "ed moore", "gpa": 2.75}, {"id": 7, "name": "john giraffe", "gpa": 3.52}, {"id": 8, "name": "mary buffalo", "gpa": 3.11}, {"id": 9, "name": "sara snowflake", "gpa": 3.38}, {"id": 10, "name": "charlie chocolate", "gpa": 3.13}];

const checkGPA = (gpa) => {
    numericGPA = parseFloat(gpa); 
    return numericGPA > '3.25';
}
const result = students.filter(checkGPA);

console.log(result);




