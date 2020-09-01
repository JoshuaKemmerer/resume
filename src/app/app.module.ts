import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SkillIconComponent } from './components/skill-icon/skill-icon.component';
import { LanguageSkillItemComponent } from './components/language-skill-item/language-skill-item.component';
import { ContactInfoItemComponent } from './components/contact-info-item/contact-info-item.component';
import { EmploymentItemComponent } from './components/employment-item/employment-item.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { InfoSeparatorComponent } from './components/info-separator/info-separator.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillIconComponent,
    LanguageSkillItemComponent,
    ContactInfoItemComponent,
    EmploymentItemComponent,
    EducationItemComponent,
    InfoSeparatorComponent
  ],
  imports: [BrowserModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
