import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn} from "./03";

let student: StudentType

beforeEach( () => {
    student = {
        name: "Dimych",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'JS'
            },
            {
                id: 3,
                title: 'CSS'
            }
        ]


    }

})

test('new tech skill should be added to student', () => {

addSkill(student, 'JS')
    expect( student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('does student live in city?', () => {
    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Minsk');

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})