import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { RulesTableTree2Component } from './rules/rules-table/rules-table-tree2/rules-table-tree2.component';
import { RulesTableTreeComponent } from './rules/rules-table/rules-table-tree/rules-table-tree.component';
import { RulesTableComponent } from './rules/rules-table/rules-table.component';
import { SearchRulesPipe } from './shared/pipes/search-rules.pipe';
import { FooterRulesComponent } from './rules/footer-rules/footer-rules.component';
import { HeaderRulesComponent } from './rules/header-rules/header-rules.component';
import { RulesComponent } from './rules/rules.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TreeModule } from 'angular-tree-component';
import { OptionsService } from './shared/options.service';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FlexLayoutModule,
        TreeModule.forRoot(),
        MatSelectModule,
        MatTabsModule,
        MatToolbarModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule
    ],
    declarations: [
        AppComponent,
        RulesComponent,
        HeaderRulesComponent,
        FooterRulesComponent,
        SearchRulesPipe,
        RulesTableComponent,
        RulesTableTreeComponent,
        RulesTableTree2Component
    ],
    exports: [SearchRulesPipe],
    providers: [OptionsService],
    bootstrap: [AppComponent]
})

export class AppModule { }
