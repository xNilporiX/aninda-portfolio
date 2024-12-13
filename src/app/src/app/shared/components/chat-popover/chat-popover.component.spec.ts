import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPopoverComponent } from './chat-popover.component';

describe('ChatPopoverComponent', () => {
  let component: ChatPopoverComponent;
  let fixture: ComponentFixture<ChatPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatPopoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
