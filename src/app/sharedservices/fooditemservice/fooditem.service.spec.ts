import { TestBed, inject } from '@angular/core/testing';

import { FooditemService } from './fooditem.service';

describe('FooditemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooditemService]
    });
  });

  it('should be created', inject([FooditemService], (service: FooditemService) => {
    expect(service).toBeTruthy();
  }));
});
