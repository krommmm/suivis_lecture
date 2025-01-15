export class Md_Formulaire {
    constructor() {
        this.typeForm = false;
    }

    switchForm() {
        this.typeForm = !this.typeForm;
        return this.typeForm;
    }

    handleInscription(form) {
        const formData = new FormData(form);
        const dataInscription = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password")
        };
        return dataInscription;
    }

    handleConnection(form) {
        const formData = new FormData(form);
        const dataConnection = {
            email: formData.get("email"),
            password: formData.get("password")
        };
        return dataConnection;
    }

    handleRegex(formId, input) {
        return formId === "signUpForm" ? this.handleRegexInscription(input) : this.handleRegexConnection(input);
    }

    handleRegexInscription(input) {
        if (input.id === "signUpForm-name") {
            const name = input.name;
            const nameValidated = this.regexTestName(name);
            return this.getFormDetailsByInputId(input, nameValidated, "name");
        } else if (input.id === "signUpForm-email") {
            const email = input.name;
            const emailValidated = this.regexTestEmail(email);
            return this.getFormDetailsByInputId(input, emailValidated, "email");
        } else if (input.id === "signUpForm-password") {
            const password = input.value;

            const isPasswordValid = {
                majuscule: this.regexTestpasswordMaj(password),
                minuscule: this.regexTestpasswordMin(password),
                space: this.regexTestpasswordSpace(password),
                chiffre: this.regexTestpasswordNumber(password),
                specialChar: this.regexTestpasswordSpecialChar(password),
                charLength: this.regexTestpassword12Char(password)
            };

            return this.getFormDetailsByInputId(input, isPasswordValid, "password");
        }
    }

    handleRegexConnection(input) {
        if (input.id === "loginForm-email") {
            return this.regexTestEmail(input);
        } else if (input.id === "loginForm-password") {
            return this.regexTestpasswordMaj(input);
        }
    }

    regexTestName(name) {
        const testName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]{2,}$/i;
        return testName.test(name) ? true : false;
    }
    regexTestEmail(email) {
        const testEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/;
        return testEmail.test(email) ? true : false;
    }
    regexTestpasswordMaj(password) {
        let testMajuscule = /[A-Z]/;
        return testMajuscule.test(password) ? true : false;
    }
    regexTestpasswordMin(password) {
        let testMinuscule = /[a-z]/;
        return testMinuscule.test(password) ? true : false;
    }
    regexTestpasswordSpace(password) {
        let testNoSpace = /(?=.*[\s])/gi;
        return testNoSpace.test(password) ? true : false;
    }
    regexTestpasswordNumber(password) {
        let testChiffre = /[0-9]/;
        return testChiffre.test(password) ? true : false;
    }
    regexTestpasswordSpecialChar(password) {
        let testCharSpecial = /[\^>$*<%+=@!,;:?.]/;
        return testCharSpecial.test(password) ? true : false;
    }
    regexTestpassword12Char(password) {
        let test12Char = /^.{12,}$/;
        return test12Char.test(password) ? true : false;
    }

    getFormDetailsByInputId(input, isValid, nameInput) {
        if (nameInput === "password") {

            const isRegexRespected = {
                formName: input.closest("FORM").id === "signUpForm" ? "inscription" : "connection",
                inputName: "password",
                elements: {
                    majuscule: { passedRegex: isValid.majuscule !== undefined ? isValid.majuscule : false },
                    minuscule: { passedRegex: isValid.minuscule !== undefined ? isValid.minuscule : false },
                    chiffre: { passedRegex: isValid.chiffre !== undefined ? isValid.chiffre : false },
                    specialChar: { passedRegex: isValid.specialChar !== undefined ? isValid.specialChar : false },
                    charLength: { passedRegex: isValid.charLength !== undefined ? isValid.charLength : false },
                    space: { passedRegex: isValid.space !== undefined ? !isValid.space : false },
                }
            }

            return isRegexRespected;
        } else {
            return {
                formName: input.closest("FORM").id === "signUpForm" ? "inscription" : "connection",
                inputName: nameInput,
                passedRegex: isValid ? true : false
            }
        }
    }
}

