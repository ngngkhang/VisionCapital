const btn = document.getElementById('button');
const proName = document.getElementById('inputProject');
const proDes = document.getElementById('inputProDes')
const email = document.getElementById('inputEmail');
const tele = document.getElementById('inputTele');
const button = document.getElementById('btn3');
const notifications = document.querySelector('.notifications');

const removeToast = (toast) => {
    setTimeout(()=>toast.remove(),100000)
};
const toastDetails = {
    success: {
        icon: "fa-check-circle",
        message: "Your information has been recored!"
    },
    email: {
        icon: "fa-times-circle",
        message: "Email is required!"
    },
    emailFormat: {
        icon: "fa-times-circle",
        message: "Wrong format Email!"
    },
    proName: {
        icon: "fa-times-circle",
        message: "projectName is required!"
    },
    tele: {
        icon: "fa-times-circle",
        message: "Telegram is required!"
    },
    proDes: {
        icon: "fa-times-circle",
        message: "project description is required!"
    },
}

window.onscroll = function() {scrollTop()};
function scrollTop(){
    if(document.body.scrollTop >20 || document.documentElement.scrollTop >20) {
        btn.classList.add('show');
    } else {btn.classList.remove('show');}
    btn.addEventListener('click', (event)=> {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}

function righty() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const inputEmail = email.value;
    const inputProName = proName.value;
    const inputTele = tele.value;
    const inputproDes = proDes.value;
    
    // Initialize a boolean variable to check if all conditions are met
    let allConditionsMet = true;

    if (!inputEmail) {
        showToast('email');
        allConditionsMet = false;
    }
    if (!emailRegex.test(inputEmail)) {
        showToast('emailFormat');
        allConditionsMet = false;
    }
    if (!inputProName) {
        showToast('proName');
        allConditionsMet = false;
    }
    if (!inputTele) {
        showToast('tele');
        allConditionsMet = false;
    }
    if (!inputproDes) {
        showToast('proDes');
        allConditionsMet = false;
    }

    // Display 'success' toast only when all conditions are met
    if (allConditionsMet) {
        showToast('success');
    }
}

function showToast(status) {
    const {icon,message} = toastDetails[status];
    const toast = document.createElement("li");
    toast.className = `toast ${status}`;
    toast.innerHTML = `<div class="column">
    <i class="fa ${icon}"></i>

    <span>${message}</span>
  </div>
`;
    notifications.appendChild(toast);
    removeToast(toast);
}
function handleClickBtnLogin(event) {
    righty();
  }
button.addEventListener('click', (event)=> handleClickBtnLogin());