import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickDirective } from './directives/click.directive';
import { ColorDirective } from './directives/color.directive';
import { TodoComponent } from './todo/todo.component';
import { YellPipe } from './yell.pipe';

@NgModule({
  declarations: [AppComponent, YellPipe, TodoComponent, ClickDirective, ColorDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
