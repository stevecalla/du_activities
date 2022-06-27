    //query selector variables go here 👇
    let sendData = document.getElementById('sendData');

    //global variables go here 👇

    //event listeners go here 👇
    sendData.addEventListener('click', getInputValues);

    //functions and event handlers go here 👇
    function getInputValues() {
      event.preventDefault();
      // console.log(document.getElementById('name').value);
      let contactInformation = `
        ${document.getElementById('name').value}
        ${document.getElementById('email').value}
        ${document.getElementById('msg').value}`;
      alertBox(contactInformation);
    }

    function alertBox(contactInformation) {
      alert(`
        UNDER CONSTRUCTION
        COMMING SOON
        ${contactInformation}
      `);
      clearInputValues();
    }

    function clearInputValues() {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('msg').value = '';
    }