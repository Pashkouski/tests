type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}
type cityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: cityType
}
type TechnologiesType = {
    id: number,
    title: string
}


const student: StudentType = {
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



