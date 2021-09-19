import { TestBed } from '@angular/core/testing';

import { AdminAddNewItemService } from './admin-add-new-item.service';

describe('AdminAddNewItemService', () => {
  let service: AdminAddNewItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAddNewItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
