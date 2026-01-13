import { Component,inject } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-admin-feedbacks-list',
  standalone: false,
  templateUrl: './admin-feedbacks-list.html',
  styleUrl: './admin-feedbacks-list.css',
})
export class AdminFeedbacksList {
  api = inject(ApiService)
  allfeedbacks:any = []

  ngOnInit(){
    this.getFeedbackList()
  }
  getFeedbackList(){
    this.api.getFeedbackListAPI().subscribe((res:any) => {
      this.allfeedbacks = res
      //console.log(res);
    })
  }
  editStatus(id:string,status:string){
    this.api.updateFeedbackAPI(id,status).subscribe((res:any) => {
      alert(`Status of Feedback ID : ${res._id} Updated Successfully....!!!`)
      this.getFeedbackList()
    })
  }
}
