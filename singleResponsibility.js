//SOLID Principles

//Single Responsibility Principle (SRP):

// Antes (no cumple con SRP)
class UserService {
  authenticateUser(username, password) {
    // código de autenticación de usuario
  }

  sendEmail(subject, body, to) {
    // código para enviar correo electrónico
  }
}

// Después (cumple con SRP)
class AuthenticationService {
  authenticateUser(username, password) {
    // código de autenticación de usuario
  }
}

class EmailService {
  sendEmail(subject, body, to) {
    // código para enviar correo electrónico
  }
}


