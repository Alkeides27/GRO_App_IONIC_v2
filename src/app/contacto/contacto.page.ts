import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonButton, IonInput, IonTextarea, IonToast } from '@ionic/angular/standalone';
import { ToastController, AlertController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { mailOutline, logoWhatsapp, logoGithub, locationOutline, chevronForwardOutline, checkmarkCircle } from 'ionicons/icons';

/*
  Página de contacto interactiva. Se mantiene la lista de canales original
  y se agrega debajo un formulario reactivo con validaciones por campo.

  Usamos Reactive Forms (FormBuilder + Validators) porque brinda mayor
  control sobre el estado de validación (touched, dirty, errors) en
  comparación con Template-driven forms, lo cual es esencial para
  mostrar errores solo después de que el usuario toca cada campo.

  La validación de email usa un patrón regex en vez de Validators.email
  porque la nativa de Angular acepta emails sin TLD como "a@b" que
  técnicamente cumplen RFC pero no sirven en práctica.
*/
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonMenuButton, IonIcon, IonButton,
    IonInput, IonTextarea
  ]
})
export class ContactoPage implements OnInit {

  contactForm!: FormGroup;

  // Regex estricto para email: requiere al menos un dominio con TLD válido.
  // Usamos pattern en vez de Validators.email porque la nativa de Angular
  // acepta emails sin TLD como "a@b" que técnicamente cumplen RFC pero no
  // sirven en práctica.
  private emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(
    private fb: FormBuilder,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {
    addIcons({ mailOutline, logoWhatsapp, logoGithub, locationOutline, chevronForwardOutline, checkmarkCircle });
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      // Nombre: requerido, entre 3 y 60 caracteres
      nombre: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
      ]],
      // Email: requerido, debe coincidir con el patrón regex
      email: ['', [
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]],
      // Asunto: requerido, entre 5 y 100 caracteres
      asunto: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]],
      // Mensaje: requerido, entre 20 y 500 caracteres
      mensaje: ['', [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(500)
      ]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  // Calcula la longitud actual del mensaje para el contador de caracteres
  get messageLength(): number {
    return this.contactForm.get('mensaje')?.value?.length || 0;
  }

  // Clase CSS condicional para el contador: normal, warning (450+) o danger (500)
  get counterColorClass(): string {
    const len = this.messageLength;
    if (len >= 500) return 'danger';
    if (len >= 450) return 'warning';
    return '';
  }

  // Retorna el mensaje de error específico según la validación que falla.
  // Cada campo tiene mensajes personalizados para cada tipo de error.
  getFieldError(field: string): string {
    const control = this.contactForm.get(field);
    if (!control || !control.errors || !control.touched) return '';

    const errors = control.errors;

    switch (field) {
      case 'nombre':
        if (errors['required']) return 'El nombre es obligatorio.';
        if (errors['minlength']) return 'El nombre debe tener al menos 3 caracteres.';
        if (errors['maxlength']) return 'El nombre no puede superar los 60 caracteres.';
        break;
      case 'email':
        if (errors['required']) return 'El email es obligatorio.';
        if (errors['pattern']) return 'El email no tiene un formato válido.';
        break;
      case 'asunto':
        if (errors['required']) return 'El asunto es obligatorio.';
        if (errors['minlength']) return 'El asunto debe tener al menos 5 caracteres.';
        if (errors['maxlength']) return 'El asunto no puede superar los 100 caracteres.';
        break;
      case 'mensaje':
        if (errors['required']) return 'El mensaje es obligatorio.';
        if (errors['minlength']) return 'El mensaje debe tener al menos 20 caracteres.';
        if (errors['maxlength']) return 'El mensaje no puede superar los 500 caracteres.';
        break;
    }

    return '';
  }

  // Abre el mailto: con los datos del formulario prellenados.
  // El body incluye nombre y mensaje con saltos de línea reales (%0D%0A).
  async onSubmit() {
    if (this.contactForm.invalid) {
      // Marcamos todos los campos como touched antes de mostrar errores en un
      // submit fallido, para que el usuario vea de un solo golpe todo lo que
      // falta corregir en lugar de descubrirlo campo por campo.
      this.contactForm.markAllAsTouched();
      return;
    }

    const { nombre, email, asunto, mensaje } = this.contactForm.value;

    // Construir el body del mailto con saltos de línea reales
    const body = `Nombre: ${nombre}%0D%0AMensaje:%0D%0A${mensaje}`;
    const mailtoUrl = `mailto:apakuamita17@proton.me?subject=${encodeURIComponent(asunto)}&body=${body}&reply-to=${encodeURIComponent(email)}`;

    // Mostrar toast verde de confirmación
    const toast = await this.toastCtrl.create({
      message: 'Mensaje preparado correctamente. Se abrirá tu cliente de correo.',
      duration: 2500,
      position: 'bottom',
      color: 'success'
    });
    await toast.present();

    // Abrir el mailto: después de un breve delay para que el toast sea visible
    setTimeout(() => {
      window.location.href = mailtoUrl;
      // Resetear el formulario 500ms después de abrir mailto
      setTimeout(() => {
        this.contactForm.reset();
      }, 500);
    }, 300);
  }

  // Botón "Limpiar": muestra confirmación antes de resetear el formulario
  async onClear() {
    const alert = await this.alertCtrl.create({
      header: 'Limpiar formulario',
      message: '¿Seguro que querés limpiar el formulario? Se perderán los datos ingresados.',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Limpiar', role: 'confirm', handler: () => this.contactForm.reset() }
      ]
    });
    await alert.present();
  }

  // Funciones para abrir canales externos
  openWhatsApp() {
    // TODO: reemplazar con número real
    window.open('https://wa.me/+584120000000', '_blank', 'noopener');
  }

  openGitHub() {
    window.open('https://github.com/apakuamita17', '_blank', 'noopener');
  }

  openLocation() {
    window.open('https://www.google.com/maps/search/?api=1&query=Barquisimeto,Venezuela', '_blank', 'noopener');
  }
}
