export class UI_Formulaire {
    constructor() {
        this.formulaireDiv = document.querySelector(".formulaire__main");
    }

    displayInscriptionForm() {
        this.formulaireDiv.innerHTML = ` 
        <div class="formContainer">
              <form id="signUpForm" method="post">
                <h2>Inscription</h2>
                <div>
                    <label for="signUpForm-name">Name</label>
                    <input id="signUpForm-name" name="name" required="required" type="text" placeholder="name" />
                </div>
                <div>
                    <label for="signUpForm-email">Email</label>
                    <input id="signUpForm-email" name="email" required="required" type="email" placeholder="email" />
                </div>
                <div>
                    <label for="signUpForm-password">Password</label>
                    <input id="signUpForm-password" name="password" required="required" type="password" placeholder="password" />
                </div>
                <button class="btn btn-submit">Send</button>
            </form> 
            <p class="href_formulaire">Déjà inscrit ?</p>
            </div>
           <div class="regexPassword">
             <p>Password must contain:</p>
             <div class="false"><i></i><p>At least <strong>1 uppercase</strong></p></div>
             <div class="false"><i></i><p class="false">At least <strong>1 lowercase</strong></p></div>
             <div class="false"><i></i><p class="false">At least <strong>1 number</strong></p></div>
             <div class="false"><i></i><p class="false">At least <strong>1 special character</strong></p></div>
             <div class="false"><i></i><p class="false">At least <strong>12 characters</strong></p></div>
             <div class="false"><i></i><p class="false"><strong>No space</strong></p></div>
            </div>
        `;
    }

    displayConnexionForm() {
        this.formulaireDiv.innerHTML = `
               <div class="formContainer">
              <form id="loginForm" method="post">
                <h2>Connection</h2>
                <div>
                    <label for="loginForm-email">Email</label>
                    <input id="loginForm-email" name="email" required="required" type="email" placeholder="email" />
                </div>
                <div>
                    <label for="loginForm-password">Password</label>
                    <input id="loginForm-password" name="password" required="required" type="password" placeholder="password" />
                </div>
                <button class="btn btn-submit">Send</button>
            </form>
            <p class="href_formulaire">S'inscrire</p>
            </div>
        `;
    }

    displayCharRespected(isRegexRespected) { 
        const regexPasswordContainer = document.querySelector(".regexPassword");
        const regexElementsNames = ["majuscule", "minuscule", "chiffre", "specialChar", "charLength", "space"];

        regexElementsNames.forEach((element, index) => {
            if (isRegexRespected.formName === "inscription" && isRegexRespected.inputName === "password") {
                isRegexRespected.elements[element].passedRegex ? this.addClassList(regexPasswordContainer.children[index + 1]) : this.removeClassList(regexPasswordContainer.children[index + 1]);
                isRegexRespected.elements[element].passedRegex ? regexPasswordContainer.children[index + 1].children[0].className = "fa-solid fa-check" : regexPasswordContainer.children[index + 1].children[0].className = "fa-solid fa-xmark";
            }
        })
    }

    addClassList(element) {
        element.classList.remove("false");
        element.classList.add("true");
    }

    removeClassList(element) {
        element.classList.remove("true");
        element.classList.add("false");
    }
}

