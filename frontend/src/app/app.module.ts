import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ChatsComponent } from './components/chats/chats.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
