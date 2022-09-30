const { default: axios } = require('axios');
const Member = require('../model/membership')



//display API documentation
const displayUsageGuide = (req, res) => {
    res.send({
        "welcome_message": "Please read the usage guide",
        "Get all members using": "/all_members",
        "Create new members using": "/create_member",
        "Get details for specific members using": "/member/:username",
        "Update details for specific members using": "/member/:username",
        "Delete a member using": "/member/:username"
    })
}


//create a member
const createNewMember = (req, res) => {

    //details for new member that users want to add
    let new_member_details = req.body;
    console.log(new_member_details);
    // console.log(typeof new_member_details);

    //validate user data
    // let validator_obj = Object.entries(new_member_details);
    // console.log(validator_obj)




    //add new member to the database
    (async() => {
        await Member.create(new_member_details);

        console.log("New member added to database");

        res.send({ "status_code": 0, "status_message": "Member added successfully" });
    })();

};


//get all members
const getAllMembers = (req, res) => {

    (async() => {
        const members = await Member.findAll();
        console.log("Sucessfully got all members from the database");

        res.send({
            "status_code": 0,
            "status_message": "Got all members sucessfully.",
            members
        });
    })();

}


//get a member
const getSpecificMember = (req, res) => {
    let required_member_username = req.params;
    required_member_username = required_member_username["username"]


    //check if required member is valid
    avaliable_usernames.forEach((username) => {
        console.log(members);
        if (required_member_username === username) {
            let required_member_details = members[required_member_username];
            res.send({
                "status_code": 0,
                "status_message": "user details successfully submitted",
                required_member_details
            })
        } else {
            res.send({ "status_code": 1, "status_message": "invalid username, member doesn't exist" })
        }
    })
}


//update a member
const updateSpecificMember = (req, res) => {

    //id of member that user want to update
    let required_member_id = req.params;
    required_member_id = required_member_id["id"];
    console.log(required_member_id);


    //details to be updated
    let change_details = req.body;
    console.log(change_details);


    // check if user is valid 
    (async() => {
        await Member.update(change_details, {
            where: {
                id: required_member_id
            }
        });

        res.send("Member successfully updated.")
    })();

}


//delete a member
const deleteSpecificMember = (req, res) => {

    //get id of member to be deleted
    let required_member_id = req.params;
    required_member_id = required_member_id["id"];
    console.log(required_member_id);


    // delete member that has that id 
    (async() => {
        await Member.destroy({
            where: {
                id: required_member_id
            }
        });

        res.send({ "status_code": 0, "status_message": "Member deleted successfully." })

    })();

}


//display EJS files
//display new member for
const displayNewMemberForm = (req, res) => {
    res.render('add-member', {
        page: 'add member'
    });
    // res.send("displaying form");
}


const displayMembersTable = (req, res) => {

    (async() => {
        let members = await axios.get("http://localhost:5000/members")
            .then((response) => {
                let data = response.data["members"];
                return data


            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                }
            });

        my_data = {
            page: 'Members',
            members
        }

        console.log(my_data);

        res.render('members-table', my_data);

        console.log(my_data);
    })();






    // console.log(my_data);



}


// <%= my_data["members"].id %> 

module.exports = {
    getAllMembers,
    createNewMember,
    getSpecificMember,
    updateSpecificMember,
    deleteSpecificMember,
    displayUsageGuide,
    displayNewMemberForm,
    displayMembersTable
}


// {
//     "firstName":"Samuel",
//     "middleName":"Kenya",
//     "lastName":"Doe",
//     "gender":"male",
//     "phoneNumber":"0770322706",
//     "dateOfBirth":"Januay 15, 1847",
//     "location":"Barnersville",
//     "countyOfOrigin":"Lofa",
//     "currentSchool":"ELWA School",	"current_class":"5th Grade",
//     "currentClass":"5th Grade",
//     "image":"https://avatars.githubusercontent.com/u/52508120?v=4",
//     "membershipPlan":"E Membership"
//     }