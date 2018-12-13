const eventListeners = {
    handleFormSubmission () {
        // console.log("clicked!");
        const creator = document.querySelector("#lego__creator").value;
        //Using .value allows us to get the value typed into the "creator" field
        const name = document.querySelector("#lego__name").value;
        const shape = document.querySelector("#lego__shape").value;
        const color = document.querySelector("#lego__color").value;
        // debugger

        //create an object to represent a lego:
        const legoObject = {
            creatorName: creator,
            legoName: name,
            legoColor: color,
            legoShape: shape

        }
        // console.log("legoToSave", legoToSave);

        //Post to API and pass legoToSave 

        data.postLego(legoObject);
    }
};