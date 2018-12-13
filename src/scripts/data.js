const data = {
    postLego(legoToSave) {
        fetch("http://localhost:8088/legos", { 
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})
}
}
    // },

    //This is an example of a delete method which would delete the lego with id 2.
//     deleteLego (legoId) {
//         fetch(`"http://localhost:8088/legos/${legoId}"`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//         }
//     })
// }

// deleteLego(2);

//This is an example of a delete method which would delete the lego with id 2.