System.config({
    map : {
        'app': 'app',
        'rxjs': 'https://unpkg.com/rxjs@5.0.0-rc.4',
        'angular2-fontawesome': 'https://unpkg.com/angular2-fontawesome@0.8.0',
        '@angular/common': 'https://unpkg.com/@angular/common@2.2.1',
        '@angular/compiler': 'https://unpkg.com/@angular/compiler@2.2.1',
        '@angular/core': 'https://unpkg.com/@angular/core@2.2.1',
        '@angular/platform-browser': 'https://unpkg.com/@angular/platform-browser@2.2.1',
        '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic@2.2.1'

    },
    packages:{
        'app':  { main: 'main.ts',  defaultExtension: 'ts' },
        'angular2-fontawesome': { main: 'bundles/angular2-fontawesome.umd.min.js', defaultExtension: 'js' },
        '@angular/common': { main: 'bundles/common.umd.js', defaultExtension: 'js' },
        '@angular/compiler': { main: 'bundles/compiler.umd.js', defaultExtension: 'js' },
        '@angular/core': { main: 'bundles/core.umd.js', defaultExtension: 'js' },
        '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js', defaultExtension: 'js' },
        '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js', defaultExtension: 'js' },
    },
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
    }
});
