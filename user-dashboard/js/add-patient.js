localStorage.setItem('profile-completed', true);
var user_country_code = "";

(() => {
    const country_list = country_and_states.country;
    const state_list = country_and_states.states;

    const id_state_option = document.getElementById("state-drop-down");
    const id_country_option = document.getElementById("country2");

    // Initially disable the state dropdown
    id_state_option.innerHTML = '<option>State of Residence</option>';
    id_state_option.setAttribute("disabled", "disabled");

    const create_country_selection = () => {
        let option = '<option value="" selected disabled>Country of Residence</option>'; // Placeholder option
        for (const country_code in country_list) {
            option += '<option value="' + country_code + '">' + country_list[country_code] + '</option>';
        }
        id_country_option.innerHTML = option;
    };

    const create_states_selection = () => {
        let selected_country_code = id_country_option.value;
        let state_names = state_list[selected_country_code];

        if (!state_names) {
            id_state_option.innerHTML = '<option>select state</option>';
            id_state_option.setAttribute("disabled", "disabled");
            return;
        }

        let option = '<option>select state</option>';
        state_names.forEach(state => {
            option += '<option value="' + state.code + '">' + state.name + '</option>';
        });

        id_state_option.innerHTML = option;
        id_state_option.removeAttribute("disabled"); // Enable dropdown when country is selected
    };

    // Country select change event update state dropdown
    id_country_option.addEventListener('change', create_states_selection);

    // Initialize country dropdown with placeholder
    create_country_selection();
})();


// JavaScript (no need for country list or state handling now)
(() => {
    const country_list = country_and_states.country;
    const id_country_option = document.getElementById("country");

    const create_country_selection = () => {
        let option = '<option value="" selected disabled>Nationality</option>'; // Placeholder option
        for (const country_code in country_list) {
            option += '<option value="' + country_code + '">' + country_list[country_code] + '</option>';
        }
        id_country_option.innerHTML = option;
    };

    // Initialize country dropdown with placeholder and country options
    create_country_selection();
})();


function redirectToPatientSearch(pageURL) {
    localStorage.setItem("redirectAfterPopup", pageURL);
    window.location.href = "/user-dashboard/dha-search-patient.html";
}

const cdhaProfile = document.getElementById('cdha-profile');
const userProfile = document.getElementById('user-profile');

const dhaMonitorsMenu = document.getElementById('dha-monitors-menu');
const normalMonitorsMenu = document.getElementById('normal-monitors-menu');

const dhaMonitorsMobile = document.getElementById('dha-monitors-mobile');
const normalMonitorsMobile = document.getElementById('normal-monitors-mobile');

const patientLink = document.getElementById('patient-link');
const patientDropDown = document.getElementById('patient-drop-down');

const checkUser = localStorage.getItem('dha-user')

if (checkUser === 'true') {
    userProfile.classList.add('d-lg-none');
    patientLink.classList.add('d-none');
    normalMonitorsMenu.classList.add('d-none');
    normalMonitorsMobile.classList.add('d-none');
    document.getElementById('cdha-relationship').classList.remove('d-none');
} else {
    document.getElementById('cdha-relationship').classList.add('d-none');
    patientDropDown.classList.add('d-none');
    cdhaProfile.classList.add('d-lg-none');
    dhaMonitorsMenu.classList.add('d-none');
    dhaMonitorsMobile.classList.add('d-none');
}

let inactivityTime = 120000;
let timeout;

function resetTimer() {
    clearTimeout(timeout);
    document.getElementById("logoutModal").style.display = "none";
    timeout = setTimeout(showLogoutScreen, inactivityTime);
}

function showLogoutScreen() {
    document.getElementById("logoutModal").classList.add('d-flex');
}

document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);
document.addEventListener("scroll", resetTimer);
document.addEventListener("click", resetTimer);

resetTimer();

// Share Message
const shareMsg = document.querySelector('.share-message');
const crossIcon = document.querySelector('.share-img i');
const blockBtn = document.querySelector('#share')

const remoteCareDropdown = document.getElementById('m-remote-care-dropdown');
const remoteCareDropdownBtn = document.getElementById('remote-care-dropdown');
const remoteCareBtn = document.querySelectorAll('.remote-care-btn');
const pairDevicePopop = document.getElementById('paired-device-popup');
const pairedBackBtn = document.getElementById('paired-black-btn');
const pairedCloseBtn = document.getElementById('paired-close-btn');

const shareProfilePopup = document.getElementById('share-profile-popup');
const shareProfileBtn = document.getElementById('share-profile-btn');
const ProfileCloseBtn = document.getElementById('profile-close-btn');

ProfileCloseBtn.addEventListener('click', () => {
    shareProfilePopup.classList.toggle('d-none')
})

shareProfileBtn.addEventListener('click', () => {
    shareProfilePopup.classList.remove('d-none');
    shareProfilePopup.classList.add('d-flex');
})


pairedBackBtn.addEventListener('click', () => {
    pairDevicePopop.classList.add('d-none');
})
pairedCloseBtn.addEventListener('click', () => {
    pairDevicePopop.classList.add('d-none');
})
crossIcon.addEventListener('click', () => {
    shareMsg.style.display = 'none';
});


document.addEventListener("DOMContentLoaded", () => {
    const dropdownMenu = document.querySelector(".menu-item-dropdown .dropdown-menu");
    if (dropdownMenu) {
        dropdownMenu.classList.add("show");
    }

    const arrowIcon = document.querySelector(".menu-item-dropdown .main-arrow");
    if (arrowIcon) {
        arrowIcon.style.transform = "rotate(90deg)";
    }
});

const addImg = document.getElementById('add-1-img');
const addImgPupup = document.getElementById('add-1-popup');
const addImgClose = document.getElementById('add-close-btn');


addImgPupup.addEventListener(('click'), (e) => {
    if (e.target === addImgPupup) {
        addImgPupup.classList.add('d-none')
    }
})

addImg.addEventListener(('click'), () => {
    addImgPupup.classList.remove('d-none')
})

addImgClose.addEventListener(('click'), () => {
    addImgPupup.classList.add('d-none')
})