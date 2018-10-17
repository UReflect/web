import { TestBed, async } from '@angular/core/testing'
import { AppComponent }   from '../../src/app/app.component'
import { AppModule }      from '../../src/app/app.module'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    }).compileComponents()
  }))
})
