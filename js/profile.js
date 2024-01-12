document.addEventListener("DOMContentLoaded", function () {
    showProfile();

    document.getElementById('updateButton').addEventListener('click', showUpdateForm);
    document.getElementById('saveButton').addEventListener('click', updateProfile);
    document.getElementById('cancelButton').addEventListener('click', saveUpdatedProfile);
});

function showProfile() {
    var profileSection = document.getElementById('profileSection');
    var updateForm = document.getElementById('updateForm');

    profileSection.classList.remove('hidden');
    updateForm.classList.add('hidden');

    // Profil bilgileri
    var storedUsername = localStorage.getItem('username') || 'Default Username';
    var storedPhone = localStorage.getItem('phone') || 'Default Phone';
    var storedAddress = localStorage.getItem('address') || 'Default Address';

    document.getElementById('displayProfileUsername').innerText = storedUsername;
    document.getElementById('displayProfilePhone').innerText = storedPhone;
    document.getElementById('displayProfileAddress').innerText = storedAddress;
}

function showUpdateForm() {
    document.getElementById('profileSection').classList.add('hidden');
    document.getElementById('updateForm').classList.remove('hidden');
}

function updateProfile() {
    var newProfileUsername = document.getElementById('updateProfileUsername').value;
    var newProfilePhone = document.getElementById('updateProfilePhone').value;
    var newProfileAddress = document.getElementById('updateProfileAddress').value;

    localStorage.setItem('username', newProfileUsername);
    localStorage.setItem('phone', newProfilePhone);
    localStorage.setItem('address', newProfileAddress);

    showProfile(); 
}

function saveUpdatedProfile() {
    showProfile(); 
}
