import { Component, OnInit }                       from '@angular/core'
import { Observable }                              from 'rxjs'
import { select, Store }                           from '@ngrx/store'
import * as fromStore                              from '@core/modules/store'
import * as fromSelectors                          from '@core/modules/store/selectors'
import { IModule }                                 from '@core/modules/models/module'
import { ActivatedRoute }                          from '@angular/router'
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms'

/**
 * Module listing component
 */
@Component({
  selector: 'app-module-list',
  templateUrl: 'module-list.component.html',
  styleUrls: ['module-list.component.scss']
})

export class ModuleListComponent implements OnInit {
  /**
   * Modules in array from store
   */
  modules$: Observable<IModule[]>
  /**
   * Simple boolean for all modules loading or not
   */
  all: boolean
  /**
   * Search form
   */
  searchForm: FormGroup
  /**
   * Simple boolean for filters dropdown
   */
  toggleFilters = false
  /**
   * Filter mode
   */
  mode: string

  /**
   * Constructor
   * @param store Module store
   * @param route Current route
   * @param fb Form builder
   */
  constructor(private store: Store<fromStore.IModuleReducerState>,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    if (route.snapshot.url[1] && route.snapshot.url[1].path === 'mine') {
      this.all = false
      this.modules$ = this.store.pipe(select(fromSelectors.getAllLoggedUserModules))
    } else {
      this.all = true
      this.searchForm = this.fb.group({
        search: ['']
      })
      this.modules$ = this.store.pipe(
        select(fromSelectors.getAllModulesByTitle, ''))
    }
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
  }

  /**
   * Handles search in modules
   */
  searchHandler() {
    if (this.mode && this.mode.length > 0) {
      this.modules$ = this.store.pipe(select(fromSelectors.getAllModulesByFilterAndSearch, {
        search: this.search().value.trim(),
        mode: this.mode
      }))
    } else {
      this.modules$ = this.store.pipe(
        select(fromSelectors.getAllModulesByTitle, this.search().value.trim()))
    }
  }

  /**
   * Handles filtering in modules
   * @param mode Filter mode
   */
  sortHandler(mode: string) {
    this.mode = mode
    this.toggleFilters = !this.toggleFilters
    if (this.search().value.trim().length > 0) {
      this.modules$ = this.store.pipe(select(fromSelectors.getAllModulesByFilterAndSearch, {
        search: this.search().value.trim(),
        mode: this.mode
      }))
    } else {
      this.modules$ = this.store.pipe(select(fromSelectors.getAllModulesByFilter, this.mode))
    }
  }

  /**
   * Returns appropriate text for filter button
   */
  getSortBtnText(): string {
    switch (this.mode) {
      case 'name-asc':
        return 'Name Ascending'
      case 'name-desc':
        return 'Name Descending'
      case 'price-asc':
        return 'Price Ascending'
      case 'price-desc':
        return 'Price Descending'
      default:
        return 'Sort'
    }
  }

  /**
   * Returns search AbstractControl
   */
  search(): AbstractControl {
    return this.searchForm.get('search')
  }
}
