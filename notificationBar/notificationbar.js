
const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn")

const toastDetails = {
    timer:5000,
    success:{
        icon:"fa-circle-check",
        text: "Success toast"
    },
    error:{
        icon:"fa-circle-xmark",
        text: "Error toast"
    },
    warning:{
        icon:"fa-circle-check",
        text: "Warning toast"
    },
    info:{
        icon:"fa-circle-check",
        text: "Info toast"
    }
}

const removeToast = (toast) =>{
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId)
    setTimeout(() => toast.remove(),500);
}

const createToast = (id) =>{
    const {icon,text} = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = ` <div class="column">
                <i class="fa-solid ${icon}"></i>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-circle-xmark" onclick = "removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast)
    toast.timeoutId = setTimeout(() => removeToast(toast),toastDetails.timer)
}
buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id))
});


function testButton(esi){
    var test1 = document.getElementsByClassName(".test")
    createToast(esi.id)
}