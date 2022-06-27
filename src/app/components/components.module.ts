import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "./item/item.component";
import { ImageComponent } from "./image/image.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [ItemComponent, ImageComponent, CardComponent],
  imports: [CommonModule],
  exports: [ItemComponent, ImageComponent, CardComponent]
})
export class ComponentsModule {}
