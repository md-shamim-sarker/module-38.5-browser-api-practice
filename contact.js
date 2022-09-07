const dataRetrive = (inputId, localKey) => {
    const input = document.getElementById(inputId).value;
    localStorage.setItem(localKey, input);
    document.getElementById(inputId).value = '';
    window.location.reload();
};

document.getElementById('name-send').addEventListener('click', () => {
    dataRetrive('name-input', 'name');
});

document.getElementById('email-send').addEventListener('click', () => {
    dataRetrive('email-input', 'email');
});

document.getElementById('msg-send').addEventListener('click', () => {
    dataRetrive('msg-input', 'msg');
});

document.getElementById('name-delete').addEventListener('click', () => {
    localStorage.removeItem('name');
    window.location.reload();
});

document.getElementById('email-delete').addEventListener('click', () => {
    localStorage.removeItem('email');
    window.location.reload();
});

document.getElementById('msg-delete').addEventListener('click', () => {
    localStorage.removeItem('msg');
    window.location.reload();
});

document.getElementById('reset-btn').addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
});

document.getElementById('send-btn').addEventListener('click', () => {
    dataRetrive('name-input', 'name');
    dataRetrive('email-input', 'email');
    dataRetrive('msg-input', 'msg');
    window.location.reload();
});

document.getElementById('display').innerHTML = `
    <p>Name: ${localStorage.name ? localStorage.name : 'No name found'}</p>
    <p>Email: ${localStorage.email ? localStorage.email : 'No email found'}</p>
    <p>Message: ${localStorage.msg ? localStorage.msg : 'No msg found'}</p>
`;