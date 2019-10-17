import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

import * as fb from 'firebase';

import { ProfileModel } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  childList: AngularFireList<any>;
  private createdObject: any;
  resourcesList: any = [
    {
      id: 1, type: 'age', age: [
        { id: 1, name: '0' },
        { id: 2, name: '1' },
        { id: 3, name: '2' },
        { id: 4, name: '3' },
        { id: 5, name: '4' },
        { id: 6, name: '5' },
        { id: 7, name: '6' },
        { id: 8, name: '7' },
        { id: 9, name: '8' }
      ]
    },
    {
      id: 2, type: 'sex', sex: [
        { id: 1, name: 'femenino'},
        { id: 2, name: 'masculino'}
      ]
    },
    {
      id: 3, type: 'yearOfAdmission', admissionDate: [
        { id: 1, name: '2015'},
        { id: 2, name: '2016'},
        { id: 3, name: '2017'},
        { id: 4, name: '2018'},
        { id: 5, name: '2019'}
      ]
    }
  ];

  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  getProfile() {
    return this.firebase.list('profiles').snapshotChanges().pipe(
      map(action => action.map(data => {
        return {
          key: data.payload.key,
          ...data.payload.val()
        };
      })));
  }

  createProfile(profile: ProfileModel, id: any) {
    this.firebase.list('profiles').update(id, profile);
  }

  getProfilebyId(id: string) {
    const ref = fb.database().ref('profiles');
    return ref.child(id).once('value').then((snapshot) => snapshot.val());
  }

  updateProfile(id: string, profile: ProfileModel) {
    this.firebase.list('profiles').update(id, profile);
  }

  getCreatedObject() {
    return this.createdObject;
  }

  setCreatedObject(createdObject: any) {
    this.createdObject = createdObject;
  }
}
