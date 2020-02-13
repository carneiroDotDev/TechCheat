"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendEmail(to) {
    return {
        recipient: `${to.name} <${to.email}>`,
        body: "You're pre-qualified for a loan!"
    };
}
const sendTextMessage = (to) => {
    return {
        recipient: `${to.name} <${to.phone}>`,
        body: "You're pre-qualified for a loan!"
    };
};
function contactPeople(method, ...people) {
    if (method === "email") {
        people.forEach(sendEmail);
    }
    else {
        people.forEach(sendTextMessage);
    }
}
contactPeople("email", { name: "foo", email: "" });
contactPeople("phone", { name: "foo", phone: 12345678 });
function sendMessage(preferredMethod) {
    if (preferredMethod === "email") {
        console.log("sendEmail");
        sendEmail(this);
    }
    else {
        console.log("sendTextMessage");
        sendTextMessage(this);
    }
}
const c = { name: "Mike", phone: 3215551212, email: "mike@example.com" };
function invokeSoon(cb, timeout) {
    setTimeout(() => cb.call(null), timeout);
}
const bound = sendMessage.bind(c, "email");
invokeSoon(() => bound(), 500);
invokeSoon(() => sendMessage.apply(c, ["phone"]), 500);
