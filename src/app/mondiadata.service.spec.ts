import { TestBed } from '@angular/core/testing';

import { MondiadataService } from './mondiadata.service';

describe('MondiadataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MondiadataService = TestBed.get(MondiadataService);
    expect(service).toBeTruthy();
  });
});
