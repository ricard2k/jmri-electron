import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modern-model-railways-controler';
  outputHeight = '100px';

  onOutputMouseDown(event: MouseEvent): void {
    const initialY = event.clientY;
    const initialHeight = parseInt(this.outputHeight, 10);

    const onMouseMove = (e: MouseEvent) => {
      const newHeight = initialHeight + initialY - e.clientY;
      this.outputHeight = `${newHeight}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
}
