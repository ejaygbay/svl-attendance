const Parent = require('../model/parent')


//create a parent
const createNewParent = (req, res) => {

    //details for new parent that users want to add
    let new_parent_details = req.body;
    console.log(new_parent_details);
    // res.send({ "code": 0, "message": "creating parent..." })
    // console.log(typeof new_member_details);

    //validate user data
    // let validator_obj = Object.entries(new_member_details);
    // console.log(validator_obj)




    // add new parent to the database
    (async() => {
        // const parent = await Parent.create(new_parent_details);
        const new_parent = await Parent.create(new_parent_details);

        console.log("New member added to database");
        let parent_id = new_parent.id;
        console.log("parent id", parent_id)
        res.send({ "status_code": 0, "status_message": "Member added successfully", "parent_id": parent_id });
    })();

};


//get all parents
// const getAllMembers = (req, res) => {

//     (async() => {
//         const members = await Member.findAll();
//         console.log("Sucessfully got all members from the database");

//         res.send({
//             "status_code": 0,
//             "status_message": "Got all members sucessfully.",
//             members
//         });
//     })();

// }


//get a member
// const getSpecificMember = (req, res) => {
//     let required_member_username = req.params;
//     required_member_username = required_member_username["username"]


//     //check if required member is valid
//     avaliable_usernames.forEach((username) => {
//         console.log(members);
//         if (required_member_username === username) {
//             let required_member_details = members[required_member_username];
//             res.send({
//                 "status_code": 0,
//                 "status_message": "user details successfully submitted",
//                 required_member_details
//             })
//         } else {
//             res.send({ "status_code": 1, "status_message": "invalid username, member doesn't exist" })
//         }
//     })
// }


//update a parent
// const updateSpecificMember = (req, res) => {

//     //id of member that user want to update
//     let required_member_id = req.params;
//     required_member_id = required_member_id["id"];
//     console.log(required_member_id);


//     //details to be updated
//     let change_details = req.body;
//     console.log(change_details);


//     // check if user is valid 
//     (async() => {
//         await Member.update(change_details, {
//             where: {
//                 id: required_member_id
//             }
//         });

//         res.send("Member successfully updated.")
//     })();

// }


//delete a parent
// const deleteSpecificMember = (req, res) => {

//     //get id of member to be deleted
//     let required_member_id = req.params;
//     required_member_id = required_member_id["id"];
//     console.log(required_member_id);


//     // delete member that has that id 
//     (async() => {
//         await Member.destroy({
//             where: {
//                 id: required_member_id
//             }
//         });

//         res.send({ "status_code": 0, "status_message": "Member deleted successfully." })

//     })();

// }



module.exports = {
    // getAllMembers,
    createNewParent
    // getSpecificMember,
    // updateSpecificMember,
    // deleteSpecificMember,
    // displayUsageGuide,
    // displayNewMemberForm
}