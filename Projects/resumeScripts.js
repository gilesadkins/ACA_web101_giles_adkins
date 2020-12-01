// 1. onClick fade in animation to the name of the resume
// 2. hide phone number until it is clicked on
// 3. a JS function that adds a cool animation to the picture

const ani1 = () => {
  const element = document.getElementById("container2")
  console.log(element)
  element.classList.add("animate__animated", "animate__bounce")
}

const ani2 = () => {
  const phoneNum = document.getElementById("phonenumber")
  phoneNum.style.visibility = "visible"
}

const ani3 = () => {
  const address = document.getElementById("address")
  address.style.visibility = "visible"
}

const ani4 = () => {
  const email = document.getElementById("email")
  email.style.visibility = "visible"
}

const ani5 = () => {
  const linkedIn = document.getElementById("linkedIn")
  linkedIn.style.visibility = "visible"
}

const ani6 = () => {
  const picture = document.getElementById("jeffPic")
  picture.style.visibility = "hidden"
}