/**
 * No email/name/phone
 *
 * - only inputs for now
 * - Buttons to choose sign *in, *up or *out
 *
 * TODO: Make another class to create an element
 * TODO: Save Sign Out function
 * TODO: Processs the Sign Up/In/Out buttons
 */
class SignUpInOut {

  constructor() {
    this.authContainerId = "authContainer";
    this.userInputsContainerId = "userInputsContainer";
    this.userActionsContainerId = "userActionsContainer";
  }

  static createUserInput(userInputsContainerId) {
    // FIXME (magic): argument become an element
    userInputsContainerId.appendChild(
      document.createElement('INPUT')
    );
  }

  createDivElement() {
    return document.createElement("DIV");
  }

  createButtonElement(onClick, innerText) {
    const button = document.createElement("BUTTON");
    button.innerText = innerText;
    button.setAttribute("onClick", onClick);
    return button;
  }

  upIn() {
    const authContainer = this.createDivElement();
    authContainer.setAttribute("id", this.containerId);

    const userInputsContainer = this.createDivElement();
    userInputsContainer.setAttribute("id", this.userInputsContainerId);

    // register the element
    authContainer.appendChild(userInputsContainer);

    const userActionsContainer = this.createDivElement();
    userActionsContainer.setAttribute("id", this.userActionsContainerId);

    userActionsContainer.appendChild(
      this.createButtonElement(
        "SignUpInOut.createUserInput(" + this.userInputsContainerId + ");",
        "Add Credentials"
      )
    );
    userActionsContainer.appendChild(
      this.createButtonElement(
        "",
        "Sign Up"
      )
    );
    userActionsContainer.appendChild(
      this.createButtonElement(
        "",
        "Sign In"
      )
    );

    // register the element
    authContainer.appendChild(userActionsContainer);

    // view the element
    document.getElementById("root").appendChild(authContainer);
    return;

  }

  out() {
  }

}
