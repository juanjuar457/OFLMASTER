import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const materials = [
    {
        id: "1",
        vendor: "Letco",
        quantity: "2",
        productName: "Testosterone",
        catalogNumber: "16l21-U01-123123",
        unitSize: "500", //fix the underscore
        units: "grams",
        onBackOrder: false
    },
    {
        id: "2",
        vendor: "Letco",
        quantity: "2",
        productName: "Testosterone",
        catalogNumber: "16l21-U01-123123",
        unitSize: "500", //fix the underscore
        units: "grams",
        onBackOrder: false
    },
    {
        id: "3",
        vendor: "Letco",
        quantity: "2",
        productName: "Testosterone",
        catalogNumber: "16l21-U01-123123",
        unitSize: "500", //fix the underscore
        units: "grams",
        onBackOrder: false
    },
    {
        id: "4",
        vendor: "Letco",
        quantity: "2",
        productName: "Testosterone",
        catalogNumber: "16l21-U01-123123",
        unitSize: "500", //fix the underscore
        units: "grams",
        onBackOrder: false
    },
    {
        id: "5",
        vendor: "Letco",
        quantity: "2",
        productName: "Testosterone",
        catalogNumber: "16l21-U01-123123",
        unitSize: "500", //fix the underscore
        units: "grams",
        onBackOrder: false
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (material) => {
    return replaceAll(material.vendor, ' ', '-');
};

class MaterialApi {
    static getAllMaterials() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], materials));
            }, delay);
        });
    }

    static saveMaterial(material) {
        material = Object.assign({}, material); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minMaterialTitleLength = 1;
                if (material.title.length < minMaterialTitleLength) {
                    reject(`Title must be at least ${minMaterialTitleLength} characters.`);
                }

                if (material.id) {
                    const existingMaterialIndex = materials.findIndex(a => a.id == material.id);
                    materials.splice(existingMaterialIndex, 1, material);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    course.id = generateId(course);
                    course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    courses.push(course);
                }

                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => {
                    course.id == courseId;
                });
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default CourseApi;