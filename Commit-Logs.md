# 11th Commit - @Output() decorator
--------------------------------

1. Custom Event property using @Output() decorator 
2. @Output() allows to create custom event that will emit data which could be consumed in html as $event <br>
    E.g.: (movieAdded)="invokeMethod($event)" <br>
    `@Output() movieAdded = new EventEmitter<{title: string, rating: number}>();`
3. Removed movie-list component & merged it with app-data-binding-dive component.

# 10th Commit - @Input() decorator
--------------------------------

1. Added new wrapper component -> data-binding-dive
2. Refactored other existing components inside new wrapper component -> basic-principles
3. `@Input('aliasName')` decorator used on fields for custom property binding outside of the class

# 9th Commit - ngFor directive
--------------------------------

1. ngFor -> 
```html
  <div *ngFor="let name of listOfNames; let i = index;"
       [ngStyle]="{backgroundColor: i % 2 == 0 ? 'lightcyan' : 'lightpink'}">
    <p>#: {{ i }} | Name: {{ name }}</p>
  </div>
```

# 8th Commit - ngClass directive
--------------------------------

1. ngClass -> `<p>[ngClass]="{'bg-info': booleanExpression}"</p>`
2. CSS class is added to the element if the booleanExpression is true.

# 7th Commit - Angular Built-in Directives
--------------------------------

1. *ngIf as a single if -> `<p *ngIf="true">This is demo of ngIf directive.</p>`
2. *ngIf as if else if else ->
```html
    <!--  If somethingIsTrue is true  -->
    <p *ngIf="somethingIsTrue; else checkSecondExpression">This is If block.</p>
    <!--  Else If anotherThingIsTrue is true  -->
    <ng-template #checkSecondExpression>
      <p *ngIf="anotherThingIsTrue; else checkElseExpression">This is Else If block.</p>
    </ng-template>
    <!--  Else  -->
    <ng-template #checkElseExpression>
      <p>This is Else block.</p>
    </ng-template>
```
3 . `<ng-template>` is a template element that Angular uses with structural directives `(*ngIf, *ngFor, [ngSwitch] and custom directives)`.
Angular consumes the `<ng-template>` in the finished DOM by replacing it with diagnostic comments according to the directives applied.

4 . Styling elements dynamically using `ng-style` which requires JS Object with CSS Style attributes as key followed by appropriate value.
1. `<div [ngStyle]="{ 'background-color': getBGColor() }">`
2. `<div [ngStyle]="{ 'backgroundColor': getBGColor() }">`

Note: `[ngStyle]` is not an attribute but rather property binding for ngStyle directive.

# 6th Commit - Passing Event Data & 2-Way Data Binding
--------------------------------

1. Passing Event Data -> `<input type="text" (input)="updateName($event)">`
2. 2-Way Data Binding -> `<input type="text" [(ngModel)]="name">`

# 5th Commit - Property & Event Binding
--------------------------------

1. Property Binding -> `<h3 [innerText]="'Property Binding Text'"></h3>`
2. Event Binding -> `<button (click)="onClickEventHandler()"></button>`

# 4th Commit - Component selector
--------------------------------

1. CSS Selector -> `selector: 'app-comp1'`
2. Attribute Selector -> `selector: '[app-comp1]'`
3. Class Selector -> `selector: '.app-comp1'`

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
