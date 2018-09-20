//object array that will store the information entered into the survey
//currenty has a "dummy" friend to test the code
var friends = [
    {
        name: "Bob",
        photo: "https://vignette.wikia.nocookie.net/king-harkinian/images/4/47/Spongebob.png/revision/latest/scale-to-width-down/1000?cb=20170518185222",
        scores: [
            "5",
            "2",
            "2",
            "1",
            "3",
            "4",
            "5",
            "1",
            "3",
            "2"
        ]
    },
    {
        name: "Garfield",
        photo: "https://vignette.wikia.nocookie.net/garfield/images/4/43/Garfield_the_Cat.png/revision/latest?cb=20150508141623",
        scores: [
            "4",
            "5",
            "1",
            "2",
            "3",
            "1",
            "5",
            "4",
            "4",
            "2"
        ]
    }
];

//exports this file so that it is usable by other files
module.exports = friends;