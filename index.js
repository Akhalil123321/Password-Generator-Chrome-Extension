const generatePasswordBtn = document.querySelector('.generate-passwords-btn')
const displayPasswords = document.querySelector('.display-passwords-container')
const displayPassword =document.querySelectorAll('.pw-display')
const changePasswordLength = document.querySelector('.change-password-length')

const characters =[
	'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','<','>','?','+'
	]
	let passArray =[]

random = ()=>{
	return (Math.floor(Math.random() * characters.length))
}

const getRandomPassword = (num=8) =>{
	for(let j=1; j<5; j++){
	let password=''
	for(let i=0; i<num; i++){
		password += characters[random()]
	}
	passArray.push(password)
}}

const passwordHTML = () => {
	/*displayPasswords.innerHTML = passArray.map(passwords => {
		return `<div class="pw-display">${passwords}</div>`
	}).join('')*/
	for(k=0; k<4; k++){
		displayPassword[k].textContent = passArray[k]
	}
}
const renderPassword = () => {
	passArray =[]
	let number = changePasswordLength.value
	getRandomPassword(number)
	passwordHTML()
}
getRandomPassword()

generatePasswordBtn.addEventListener('click', renderPassword)



