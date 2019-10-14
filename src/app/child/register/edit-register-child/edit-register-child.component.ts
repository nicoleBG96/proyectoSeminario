import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChildRegisterService } from '../../../shared/services/child-register.service';

@Component({
  selector: 'app-edit-register-child',
  templateUrl: './edit-register-child.component.html',
  styleUrls: ['./edit-register-child.component.css']
})
export class EditRegisterChildComponent implements OnInit {
  child: any;

  constructor(private childRegisterService: ChildRegisterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.child = this.childRegisterService.getCreatedObject();
  }

  update(event: any) {
    this.childRegisterService.updateChild(event.key, event);
  }



}