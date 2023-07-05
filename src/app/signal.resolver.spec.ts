import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { signalResolver } from './signal.resolver';

describe('signalResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => signalResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
