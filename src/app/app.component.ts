import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ``,
})
export default class AppComponent {
  private readonly titleSignal = signal('Color Palette Generator App');
  title = this.titleSignal.asReadonly();
}
