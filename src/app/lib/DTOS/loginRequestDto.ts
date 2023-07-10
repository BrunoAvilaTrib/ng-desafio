import { contains, email, endsWith, prop, required } from '@rxweb/reactive-form-validators';

export class LoginRequestDto {
  @prop()
  @required({ message: 'Ingresa un usuario' })
  //@email({ message: 'No es un correo válido' })
  // @endsWith({ value: '@telefonica.com', message: 'Correo ingresado no es corporativo' })
  username: string;

  @prop()
  @required({ message: 'Ingresa una contraseña' })
  password: string;

  constructor(model?: LoginRequestDto) {
    if (model) {
      Object.assign(this, model);
    }
  }
}
