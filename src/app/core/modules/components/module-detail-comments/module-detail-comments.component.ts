import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-module-detail-comments',
  templateUrl: 'module-detail-comments.component.html'
})

export class ModuleDetailCommentsComponent implements OnInit {
  @Input() moduleId: number

  constructor() {
  }

  ngOnInit() {
  }
}
