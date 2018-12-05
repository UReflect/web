import { Component, OnInit } from '@angular/core'
import { ActivatedRoute }    from '@angular/router'

@Component({
  selector: 'app-email-confirm',
  templateUrl: 'email-confirm.component.html'
})

export class EmailConfirmComponent implements OnInit {
  private token: string

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token')
    console.log(this.token)
  }
}
