import { TestBed } from '@angular/core/testing';

import { CountryRouteActivatorService } from './country-route-activator.service';

describe('CountryRouteActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryRouteActivatorService = TestBed.get(CountryRouteActivatorService);
    expect(service).toBeTruthy();
  });
});
