const init = () => {

    // select all of the courses in the courses list using document.querySelectorAll
    // spread operator makes the node list iterable
    const courseList = [...document.querySelectorAll("#courses li")];

    // .map all of the courses so that you just have the textContent
    let courseArray = courseList.map(course => {
        return course.textContent; 
    })

    // add 2 additional courses into the mapped output using a spread operator
    let newCourses = ["Cloud for Developer", "SQL Database Programming"];
    let combinedCourses = [...courseArray, ...newCourses];

    // print the final array contents to the console
    console.log(combinedCourses);
}

// run the init function when the page is loaded. 
window.addEventListener("load", init);