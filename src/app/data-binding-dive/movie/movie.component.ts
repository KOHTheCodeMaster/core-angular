import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy,
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  //  @Input('strAliasName') -> strAliasName is used as alias for this property
  //  After providing alias, Outside of this class for property binding
  //  this property will be referenced by alias name & not the property name itself
  //  E.g.:  [movieElement]="{}" is Valid   |   [movie]="{}" is Invalid since alias name is required
  @Input('movieElement') movie: { title: string, rating: number };
  @Input() movieTitle: string;  //  primitive input-property for ngOnChanges()

  /**
   * Invoked before all lifecycle hooks.
   */
  constructor() {
    console.log("constructor.");
  }

  /**
   * Called before ngOnInit() (if the component has bound inputs)
   * and whenever one or more data-bound input properties change.
   * Invoked after constructor.
   * @param changes - instance containing prevValue & currentValue along with firstChange flag
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges.');
    console.log(JSON.stringify(changes));
    /*
      //  JSON for structure of changes instance
      let tempChanges = {
      "movieTitle":{"previousValue":"prevStr","currentValue":"currentStr","firstChange":false}
      };
     */
  }

  /**
   * ngOnInit fires once upon initialization of a component’s input-bound (@Input) properties.
   * Invoked after ngOnChanges()
   */
  ngOnInit(): void {
    console.log('ngOnInit.');
  }

  /**
   * ngDoCheck fires with every change detection cycle.
   * Angular runs change detection frequently. Performing any action will cause it to run this cycle.
   * Called immediately after ngOnInit() and on every change detection run
   * i.e. whenever any event triggers angular to check for any changes.
   */
  ngDoCheck(): void {
    console.log('ngDoCheck.' + this.movieTitle);
  }

  /**
   * ngAfterContentInit fires after the component’s content DOM initializes (loads for the first time).
   * Waiting on @ContentChild(ren) queries is the hook’s primary use-case.
   */
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit.');
  }

  /**
   * ngAfterContentChecked fires after every cycle of change detection targeting the content DOM.
   */
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked.');
  }

  /**
   * ngAfterViewInit fires once after the view DOM finishes initializing.
   * The view always loads right after the content.
   * ngAfterViewInit waits on @ViewChild(ren) queries to resolve.
   * These elements are queried from within the same view of the component.
   */
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit.');
  }

  /**
   * ngAfterViewChecked fires after any change detection cycle targeting the component’s view.
   */
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked.');
  }

  /**
   * ngOnDestroy fires upon a component’s removal from the view and subsequent DOM.
   * This hook provides a chance to clean up any loose ends before a component’s deletion.
   */
  ngOnDestroy(): void {
    console.log('ngOnDestroy.');
  }

}
