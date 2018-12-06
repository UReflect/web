import { Component, Input, OnInit } from '@angular/core'

/**
 * Module detail header component
 */
@Component({
  selector: 'app-module-detail-header',
  templateUrl: 'module-detail-header.component.html'
})

export class ModuleDetailHeaderComponent implements OnInit {
  /**
   * Title
   */
  @Input() title: string
  /**
   * User ID
   */
  @Input() owner_name: string

  /**
   * Constructor
   * @param store User store
   */
  constructor() {
  }

  /**
   * Gets user from store with selector
   */
  ngOnInit() {
  }
}
