import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Locality } from 'src/app/core/models/locaity.model';
import { LocalitiesService } from 'src/app/core/services/localities.service.service';

@Component({
  selector: 'app-localities',
  templateUrl: './app-localities.component.html',
  styleUrls: ['./app-localities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLocalitiesComponent implements OnInit {

  localities: Array<Locality> = [
    { Code: 1, Status: 3, TableID: 3, TableName: 'jjjj', Value: 'ירושלים' },
    { Code: 2, Status: 3, TableID: 3, TableName: 'jjjj', Value: 'חיפה' },
    { Code: 3, Status: 3, TableID: 3, TableName: 'jjjj', Value: 'גאולה' },
    { Code: 4, Status: 3, TableID: 3, TableName: 'jjjj', Value: 'יפו' }
  ]
  localitiesResult: Array<Locality> = this.localities;
  localityForm: FormGroup;
  subscription: Subscription

  constructor(private localitiesService: LocalitiesService) { }

  ngOnInit() {
    this.getAllLocalities();
    this.localityForm = new FormGroup({
      localityVal: new FormControl("", Validators.required),
    });
  }
  private submitForm(formData: any, formDirective: FormGroupDirective): void {
    formDirective.resetForm();
    this.localityForm.reset();
  }
  sortLocalities() {
    this.localitiesResult.sort((a, b) => a.Value.localeCompare(b.Value));
  }

  searchLocality(searchWord: string) {
    this.localitiesResult = this.localities.filter(loc => loc.Value.includes(searchWord));
  }

  getAllLocalities() {
    this.subscription = this.localitiesService.getAllLocalities().subscribe(
      data => {
        this.localities = data;
      },
      err => { console.log(err); }
    )
  }

  addLocality() {
    const addVal = this.localityForm.value.localityVal;
    const newLoc = new Locality(this.localities.length + 1, 5, 7, '', addVal);
    this.localities.push(newLoc);
  }

  deleteLocality() {
    const deleteVal = this.localityForm.value.localityVal;
    const indexDeleteVal = this.localities.findIndex((loc) => loc.Value === deleteVal);
    if (indexDeleteVal > -1)
      this.localities.splice(indexDeleteVal, 1);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
