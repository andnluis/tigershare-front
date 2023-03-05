import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-work-area',
  templateUrl: './work-area.component.html',
  styleUrls: ['./work-area.component.css']
})
export class WorkAreaComponent {
  @ViewChild('resultCode') iframeResult: ElementRef;
  @ViewChild('html') editorHtml: ElementRef;
  @ViewChild('css') editorCss: ElementRef;
  @ViewChild('js') editorJs: ElementRef;
  codeJS: string = '';
  codeHTML: string = '';
  codeCSS: string = '';
  optionsEditorCss = {
    language: 'css',
    theme: 'vs-dark', 
    fontSize: 18,
    automaticLayout: true,
    fixedOverflowWidgets: true, //investigar
    scrollBeyondLastLine: false, //investigar
    roundedSelection: false, //investigar
    padding: {
      top: 16
    },
    lineNumbers: 'on', //off
    minimap: {
      enabled: false //true
    }
  };
  optionsEditorHtml = {
    language: 'html',
    theme: 'vs-dark', 
    fontSize: 18,
    automaticLayout: true,
    fixedOverflowWidgets: true, //investigar
    scrollBeyondLastLine: false, //investigar
    roundedSelection: false, //investigar
    padding: {
      top: 16
    },
    lineNumbers: 'on', //off
    minimap: {
      enabled: false //true
    }
  };
  optionsEditorJs = {
    language: 'javascript',
    theme: 'vs-dark', 
    fontSize: 18,
    automaticLayout: true,
    fixedOverflowWidgets: true, //investigar
    scrollBeyondLastLine: false, //investigar
    roundedSelection: false, //investigar
    padding: {
      top: 16
    },
    lineNumbers: 'on', //off
    minimap: {
      enabled: false //true
    }
  };

  onCodeChange() {
    const htmlForPreview = this.createHtml(this.codeHTML, this.codeJS, this.codeCSS);
    this.iframeResult.nativeElement.setAttribute('srcdoc', htmlForPreview);
  }
  
  createHtml(html: string, js: string, css: string){
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Code link</title>
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            ${js}
          </script>
        </body>
      </html>`;
  }

}
