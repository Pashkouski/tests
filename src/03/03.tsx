import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";


const sum = (a: number, b: number) => {

}



export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        })
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
return s.address.city.title === cityName;
}



export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
building.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (governmentBuildingType: GovernmentBuildingType, number: number) => {
    governmentBuildingType.staffCount -= number
}

export const toHireStaff = (governmentBuildingType1: GovernmentBuildingType, number1: number) => {
    governmentBuildingType1.staffCount += number1
}

export const creatMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`

}