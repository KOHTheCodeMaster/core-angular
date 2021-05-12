# 3rd Commit - HTML & CSS inline template
--------------------------------

1. Added Bootstrap for styling
2. Inline CSS Style using single line: `styles: ['h1{color: white}']`
3. Inline HTML template using js string: `template: '<h1>' + 'This is the Comp1 Component.' + '</h1>'`
4. Inline HTML template using multi-line:
```html
  template: `
    <h2>
      This is the Comp1 Component.
    </h2>
  `
```

``` 
5. Inline CSS Style using multi-line:
styles: [`
    h1 {
     background-color: black;
     color: white;
    }
`]
```

# 2nd Commit - New Component
--------------------------------

1. Creating new component using `ng g c component-name` cmd
2. Components that are used by AppComponent needs to be specified under declarations array field of AppModule to avoid compilation error
3. Components that are used by index.html needs to be specified under bootstrap array field of AppModule
