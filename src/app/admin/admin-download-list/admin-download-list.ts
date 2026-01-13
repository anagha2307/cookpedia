import { Component,inject } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-admin-download-list',
  standalone: false,
  templateUrl: './admin-download-list.html',
  styleUrl: './admin-download-list.css',
})
export class AdminDownloadList {
  api = inject(ApiService)
  downloadList:any = []

  ngOnInit(){
    this.getDownloadList()
  }

  getDownloadList(){
    this.api.getDownloadListAPI().subscribe((res:any) => {
      this.downloadList = res
      console.log(res);
    })
  }
}
