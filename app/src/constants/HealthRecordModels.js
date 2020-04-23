// @flow
export const ALLERGY = {
    id: 0,
    title: "",
    onset: "",
    reaction: "",
    recordedDate: "",
    substance: ""
  };

export const CONDITION = {
    id: 0,
    title: "",
    asserter: "",
    clinicalStatus: "",
    recordedDate: "",
    onset: "",
    notes: "",
}

export const LAB_REPORT = {
    id: "",
    title: "",
    issuedDate: "",
    performer: "",
    prescriber: "",
    data: {
        text: "",
        fileHashes: [],
    },
}

export const MEDICATION = {
    id: "",
    title: "",
    issuedDate: "",
    status: "",
    prescriber: "",
    dosage: "",
}

export const PATIENT = {
    id: "",
    type: "PATIENT",
    name: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    email: "",
    phone: "",
    aadhar: "",
    bloodType: "",
}

export const PRESCRIPTION = {
    id: "",
    issueDate: "",
    prescriber: "",
    fileHash: [],
}

export const RECORD = {
    user: PATIENT,
    allergies: [],
    conditions: [],
    medications: [],
    labReports: [],
    prescriptions: [],
}


export const DUMMY_RECORD = {
    ...RECORD,
    user: {
        ...PATIENT,
        name: "Jack Sparrow",
        gender: "Male",
        email: "sdjsbd@gmail.com",
        phone: "+91 9835237645",
        bloodType: "B+",
        dateOfBirth: "1988-02-23T14:10:07.174Z"
    },

    allergies: [
        {
            ...ALLERGY,
            id: 0,
            title: "Pollen Allergy",
            onset: "1998-02-23T14:10:07.174Z",
            reaction: "Cough and Sneezing",
            recordedDate: "1998-05-23T14:10:07.174Z",
            substance: "Pollen"
        },
        {
            ...ALLERGY,
            id: 0,
            title: "Peanuts",
            onset: "1998-02-23T14:10:07.174Z",
            reaction: "Cough and Sneezing",
            recordedDate: "1998-05-23T14:10:07.174Z",
            substance: "Peanuts"
        },
        
    ],

    conditions: [
        {
            ...CONDITION,
            id: 0,
            title: "Diabetes",
            asserter: "Dr John Cooper",
            clinicalStatus: "Active",
            recordedDate: "1998-05-23T14:10:07.174Z",
            onset: "1998-05-23T14:10:07.174Z",
            notes: "",
        },
        {
            ...CONDITION,
            id: 0,
            title: "Asthama",
            asserter: "Dr John Cooper",
            clinicalStatus: "Active",
            recordedDate: "2008-09-25T14:10:07.174Z",
            onset: "2008-09-25T14:10:07.174Z",
            notes: "",
        },
        
    ],

    labReports: [
        {
            ...LAB_REPORT,
            id: "0",
            title: "CBP",
            issueDate: "2020-02-23T14:10:07.174Z",
            performer: "Vijaya Diagnostic Center",
            prescriber: "Dr Prescriber",
            notes: "Everything is fine.",
            fileHashes: ["QmbJiawCwLcgABsoESvoy7nDQsKm9GeD7yofrtLPQu6Xqv", "QmVaWGaazFtYrVcYgCDfmPrKqbUnB2VJXmUjcAsHynw9bM"],
        },
        {
            ...LAB_REPORT,
            id: "0",
            title: "X-Ray",
            issueDate: "2020-02-23T14:10:07.174Z",
            performer: "Vijaya Diagnostic Center",
            prescriber: "Dr Prescriber",
            notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et elit mi. Aenean mollis, sem congue hendrerit dignissim, augue odio placerat leo, vel maximus quam urna vel lectus.",
            fileHashes: ["QmbJiawCwLcgABsoESvoy7nDQsKm9GeD7yofrtLPQu6Xqv", "QmVaWGaazFtYrVcYgCDfmPrKqbUnB2VJXmUjcAsHynw9bM"],
        }, {
            ...LAB_REPORT,
            id: "0",
            title: "MRI",
            issueDate: "2020-02-23T14:10:07.174Z",
            performer: "Vijaya Diagnostic Center",
            prescriber: "Dr Prescriber",
            notes: "Everything is fine.",
            fileHashes: ["QmbJiawCwLcgABsoESvoy7nDQsKm9GeD7yofrtLPQu6Xqv", "QmVaWGaazFtYrVcYgCDfmPrKqbUnB2VJXmUjcAsHynw9bM"],
        }, {
            ...LAB_REPORT,
            id: "0",
            title: "CBP",
            issueDate: "2020-02-23T14:10:07.174Z",
            performer: "Vijaya Diagnostic Center",
            prescriber: "Dr Prescriber",
            notes: "Everything is fine.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et elit mi. Aenean mollis, sem congue hendrerit dignissim, augue odio placerat leo, vel maximus quam urna vel lectus.",
            fileHashes: ["QmbJiawCwLcgABsoESvoy7nDQsKm9GeD7yofrtLPQu6Xqv", "QmVaWGaazFtYrVcYgCDfmPrKqbUnB2VJXmUjcAsHynw9bM"],
        },
    ],

    prescriptions: [
        {
            ...PRESCRIPTION,
            id: "1",
            issueDate: "2018-05-03T14:10:07.174Z",
            prescriber: "Dr. John Doe",
            fileHash: "QmbJiawCwLcgABsoESvoy7nDQsKm9GeD7yofrtLPQu6Xqv",
        },
        {
            ...PRESCRIPTION,
            id: "1",
            issueDate: "2019-02-23T14:10:07.174Z",
            prescriber: "Dr. John Doe",
            fileHash: "QmbJiawCwLcgABsoESvoy7nDQsKm9GeD7yofrtLPQu6Xqv",
        },
        {
            ...PRESCRIPTION,
            id: "1",
            issueDate: "2020-01-13T14:10:07.174Z",
            prescriber: "Dr. Anthony Russo",
            fileHash: "QmbJiawCwLcgABsoESvoy7nDQsKm9GeD7yofrtLPQu6Xqv",
        },
        {
            ...PRESCRIPTION,
            id: "1",
            issueDate: "2020-03-10T14:10:07.174Z",
            prescriber: "Dr. Anil Kapoor",
            fileHash: "QmbJiawCwLcgABsoESvoy7nDQsKm9GeD7yofrtLPQu6Xqv",
        },
    ]
}