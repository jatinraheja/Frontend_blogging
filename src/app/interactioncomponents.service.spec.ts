import { TestBed } from '@angular/core/testing';

import { InteractioncomponentsService } from './interactioncomponents.service';

describe('InteractioncomponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InteractioncomponentsService = TestBed.get(InteractioncomponentsService);
    expect(service).toBeTruthy();
  });
});
