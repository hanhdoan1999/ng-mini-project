// util.service.ts

import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private messageService: MessageService) {}

  showSuccessMessage(summary?: string, detail?: string) {
    this.messageService.add({
      severity: 'success',
      summary: summary  || 'Thành công',
      detail: detail || 'Thành công',
    });
  }

  showErrorMessage(summary?: string, detail?: string) {
    this.messageService.add({
      severity: 'error',
      summary: summary || 'Lỗi',
      detail: detail || 'Lỗi hệ thống. Vui lòng liên hệ với quản trị viên để được hỗ trợ',
    });
  }
}
