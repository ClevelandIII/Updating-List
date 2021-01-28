class User {
    constructor(firstname, lastname, dob, dc, ac, dl, dr, hmb, ele, ele2, ele2cost, id) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.dc = dc;
        this.ac = ac;
        this.dl = dl;
        this.dr = dr;
        this.hmb = hmb;
        this.ele = ele;
        this.ele2 = ele2
        this.ele2cost = ele2cost
        this.id = id;
    }
}

let userList = [];
let userId = 1;

function addToList() {
    firstname = document.getElementById("firstname").value
    lastname = document.getElementById("lastname").value
    dob = document.getElementById("dob").value
    dc = document.getElementById("dc").value
    ac = document.getElementById("ac").value
    dl = document.getElementById("dl").value
    dr = document.getElementById("dr").value
    hmb = document.getElementById("hmb").value
    ele2 = ""
    ele2cost = 0

    if(document.getElementById("chick").checked == true){
        ele = document.getElementById("chick").value
    }else if(document.getElementById("fish").checked == true){
        ele = document.getElementById("fish").value
    }else if(document.getElementById("veggie").checked == true){
        ele = document.getElementById("veggie").value
    }

    if(document.getElementById("legroom").checked == true){
        ele2 += document.getElementById("legroom").value
        ele2cost++
    }
    if(document.getElementById("window").checked == true){
        ele2 += document.getElementById("window").value
        ele2cost++
    }
    if(document.getElementById("headphones").checked == true){
        ele2 += document.getElementById("headphones").value
        ele2cost++
    }
    if(document.getElementById("morefood").checked == true){
        ele2 += document.getElementById("morefood").value
        ele2cost++
    }

    if (firstname != "" && lastname != "" && dob != "" && dc != "" && ac != "" && dl != "" && dr != "" && hmb != "") {
        let user = new User(firstname, lastname, dob, dc, ac, dl, dr, hmb, ele, ele2, ele2cost, userId);
        userId++;
        userList.push(user);
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("dc").value = "";
        document.getElementById("ac").value = "";
        document.getElementById("dl").value = "";
        document.getElementById("dr").value = "";
        document.getElementById("hmb").value = "";
        document.getElementById("chick").checked = false;
        document.getElementById("fish").checked = false;
        document.getElementById("veggie").checked = false;
        document.getElementById("legroom").checked = false;
        document.getElementById("window").checked = false;
        document.getElementById("headphones").checked = false;
        document.getElementById("morefood").checked = false;
    }
}

function print() {
    let date1 = new Date(dr.toString());
    let date2 = new Date(dl.toString());
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById("ofirstname").value = firstname;
    document.getElementById("olastname").value = lastname;
    document.getElementById("odob").value = dob;
    document.getElementById("odc").value = dc;
    document.getElementById("oac").value = ac;
    document.getElementById("odl").value = dl;
    document.getElementById("odr").value = dr;
    document.getElementById("ohmb").value = hmb;
    document.getElementById("otd").value = `${diffDays} days`;
    document.getElementById("omeal").value = ele;
    document.getElementById("oextra").value = ele2;

    let age = new Date(dob.toString());
    let check = Math.abs(Date.now() - age);
    let ages = Math.ceil(check / ((1000 * 60 * 60 * 24) * 365));
    document.getElementById("oage").value = `${ages}`

    let cost = 300
    let bags = Number(hmb)

    cost += (ele2cost * 10) + (bags * 20)
    document.getElementById("ocost").value = cost

    printSpace = document.getElementById("names");

    printSpace.innerHTML = "";
    for (let i = 0; i < userList.length; i++) {
        printSpace.innerHTML += `<button id="not">${userList[i].id}|${userList[i].firstname} ${userList[i].lastname} </button><br>`
    }
}

function updateList() {
    document.getElementById("success").textContent = "UPDATED SUCCESSFULLY"
}

function search() {
    let input = ""
    input = document.getElementById("search").value

    for (let i = 0; i < userList.length; i++)
        if (input == `${userList[i].firstname} ${userList[i].lastname}`) {
            let date1 = new Date(`${userList[i].dr}`.toString());
            let date2 = new Date(`${userList[i].dl}`.toString());
            let diffTime = Math.abs(date2 - date1);
            let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            let age = new Date(`${userList[i].dob}`.toString());
            let check = Math.abs(Date.now() - age);
            let ages = Math.ceil(check / ((1000 * 60 * 60 * 24) * 365));
            document.getElementById("oage").value = `${ages}`

            let cost = 300
            let bags = Number(`${userList[i].hmb}`)
            cost += (`${userList[i].ele2cost}` * 10) + (bags * 20)

            document.getElementById("ofirstname").value = `${userList[i].firstname}`;
            document.getElementById("olastname").value = `${userList[i].lastname}`;
            document.getElementById("odob").value = `${userList[i].dob}`;
            document.getElementById("odc").value = `${userList[i].dc}`;
            document.getElementById("oac").value = `${userList[i].ac}`;
            document.getElementById("odl").value = `${userList[i].dl}`;
            document.getElementById("odr").value = `${userList[i].dr}`;
            document.getElementById("ohmb").value = `${userList[i].hmb}`;
            document.getElementById("otd").value = `${diffDays} days`;
            document.getElementById("oage").value = `${ages}`
            document.getElementById("ocost").value = `${cost}`
            document.getElementById("omeal").value = `${userList[i].ele}`;
            document.getElementById("oextra").value = `${userList[i].ele2}`;
        }
}